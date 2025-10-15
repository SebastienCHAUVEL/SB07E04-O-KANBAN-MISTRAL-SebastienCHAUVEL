import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

export function checkJWTToken(req, res, next) {
    console.log('verification du token');
    const authHeader = req.headers.authorization;
    if (! authHeader || ! authHeader.startsWith('Bearer')) {
        return res.status(StatusCodes.UNAUTHORIZED).json({error: "JSON token required"})
    }
    console.log(authHeader);
    const token = authHeader.split(' ')[1];
    console.log(token);
    // si il n'y a pas de token => error
    // si le token n'est pas valide => error
    try {
        const tokenInfo = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );
        console.log(tokenInfo);

        // enregistrement de l'utilisateur dans req
        req.userId = tokenInfo.user_id;
        next();
    }
    catch (error)
    {
        console.log(error);
        return res.status(StatusCodes.UNAUTHORIZED).json({error: "JSON token invalid"});
    }

    // optionnel ( à valider )
    // récupération du user en BDD
    // si le user n'existe pas => error

}

export function checkAuthorization(authorizedRoleList) {
    // on crée une fonction qui renvoit un middleware
    return async function (req, res, next) {

        // écrire le code de restriction
        // quoi ? limiter l'accès aux admin
        // outils nécessaire ? du Role de l'utilisateur connecté
        // outils à disposition ? req.userId
        const connectedUser = await User.findByPk(req.userId, {include: 'role'});

        if(! connectedUser) {
            return res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"});
        }
        // ici on sait que l'on a récupéré un user

        // si le role du user ne fait pas parti des roles autorisés
        if (! authorizedRoleList.includes(connectedUser.role.name)) {
            return res.status(StatusCodes.FORBIDDEN).json({error: "Access Denied"});
        }
        //ici on sait que l'utilisateur a le role admin
        console.log(connectedUser.role.name);
        // go !
        next();
    }
}
