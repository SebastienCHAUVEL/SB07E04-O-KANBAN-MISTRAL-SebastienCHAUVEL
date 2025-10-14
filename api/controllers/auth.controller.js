import { User } from '../models/user.model.js';
import { StatusCodes } from 'http-status-codes';
import  argon2 from 'argon2';

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
