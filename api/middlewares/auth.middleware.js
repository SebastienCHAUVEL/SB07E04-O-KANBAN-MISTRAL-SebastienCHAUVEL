import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

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