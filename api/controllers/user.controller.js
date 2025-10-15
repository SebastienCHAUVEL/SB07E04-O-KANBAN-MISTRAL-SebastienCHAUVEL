import { User } from "../models/user.model.js";

export async function getAll(req, res) {
    // on veut récupérer tous les users de la BDD
    const users = await User.findAll({});
    console.log(users);
    return res.json(users);

}
