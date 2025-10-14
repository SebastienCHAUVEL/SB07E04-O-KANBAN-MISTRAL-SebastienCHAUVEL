import { User } from '../models/user.model.js';
import { StatusCodes } from 'http-status-codes';
import  argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export async function registerUser(req, res) {

    // récupérer les infos fournies (login / mdp / validation)
    const { username, password, validation } = req.body;
    console.log(username, password, validation);
        // valider les données ( JOI ) fait avec un middleware
        // vérifier que mot de passe et validation sont identique
    if (password !== validation)
    {
        return res.status(StatusCodes.BAD_REQUEST).json({ 
            error: "Password and validation must match"
        });
    }
        // vérifier que l'utilisateur n'existe pas
        /*
        récupérer un utilisateur par le username fournit
        si  il existe alors renvoyer une erreur
        */
    try {
    
        // hasher le mot de passe
        const hashedPassword = await argon2.hash(password);
    
        console.log(hashedPassword);
        // créer l'utilisateur
        const createdUser = await User.create({username, password: hashedPassword});
    
        // renvoyer l'utilisateur créé
        // res.json({...createdUser, password: undefined});
        return res.status(StatusCodes.CREATED).json({id: createdUser.id, username: createdUser.username});
    } catch (error) {
        console.log(error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(StatusCodes.CONFLICT).json({ 
                error: "Duplicate entry"
            });
        }
        throw new Error("Internal Server Error !");
    }
}

export async function login (req, res) {
    // 1. récupérer le usernameForm et le mdpForm ( en clair) fournit par l'utilisateur
    const { username, password } = req.body;

    // 2. récupérer depuis la BDD le user correspondant au usernameForm fourni
    const user = await User.findOne({where: {username}});

    const errorMsg = "Login and Password does not match";
    // 3. si l'utilisateur n'existe pas => renvoyer une erreur
    if (!user) {
        console.log('user not found');
        return res.status(StatusCodes.UNAUTHORIZED).json({ 
            error: errorMsg
        })
    }
    // comparer les mdp avec argon2.verify() cf demo-app.js
    const passwordIsValid = await argon2.verify(user.password, password);
    // si les mots de passe ne correspondent pas => renvoyer une erreur
    if (! passwordIsValid) {
        console.log('invalid password');
        return res.status(StatusCodes.UNAUTHORIZED).json({ 
            error: errorMsg
        });
    }

    // l'utilisateur est identifié
    console.log('identification réussie');
    // créer un token jwt
    const token = jwt.sign(
        { user_id: user.id }, // les données à stocker dans le token
        process.env.JWT_SECRET, // une clef secrète pour générer la partie validation
        {expiresIn: "4h"} // des options cf https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
    );
    // et le fournir au client
    res.json({token: token});
}