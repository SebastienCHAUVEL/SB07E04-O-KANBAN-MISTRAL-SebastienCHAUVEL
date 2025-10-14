import express from "express";
import cors from "cors";
import argon2 from "argon2";

const PORT = 3042;

const app = express();

app.use(cors({origin: "http://localhost"}));
app.use(express.json());

app.use("/countries", (req, res) => {
    // 1 récupérer les données fournies
    // 2 récupérer les données demandées
    const countries = [
    {
        "name": "France",
        "capital": "Paris",
        "population": 67364357,
        "area": 551695,
        "currency": "Euro",
        "languages": [
        "French"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
    },
    {
        "name": "Germany",
        "capital": "Berlin",
        "population": 83240525,
        "area": 357022,
        "currency": "Euro",
        "languages": [
        "German"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
    },
    {
        "name": "United States",
        "capital": "Washington, D.C.",
        "population": 331893745,
        "area": 9833517,
        "currency": "USD",
        "languages": [
        "English"
        ],
        "region": "Americas",
        "subregion": "Northern America",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
    },
    {
        "name": "Belgium",
        "capital": "Brussels",
        "population": 11589623,
        "area": 30528,
        "currency": "Euro",
        "languages": [
        "Flemish",
        "French",
        "German"
        ],
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
    }
    ];
    // 3 fournir une réponse
    res.json(countries);
});

app.get("/hash", async (req, res) => {
    // récupérer le mot de passe fournit dans la requete HTTP
    const clearPassword = 'toto';

    // hasher le mot de passe
    const hashedPassword =  await argon2.hash(clearPassword);
    console.log(hashedPassword);

    res.send('ok');
    // enregistrer le mot de passe hashé en BDD
});

app.post("/check", async (req, res) => {
    const clearPassword = req.body.password;

    console.log(clearPassword);
    // le hashed password est à récupérer depuis la BDD
    const hashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$VIMpFqskIdr5bLiaDYV4xQ$ZodhKiqzLG6Nm8MjzOdIquFoKJilc80OwnRhVjOwtw0'

    // hasher le mot de passe
    const passwordIsValid =  await argon2.verify(hashedPassword, clearPassword);
    console.log(passwordIsValid ? 'mot de passe valide' : 'mot de passe KO');
    res.send('fin');
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
