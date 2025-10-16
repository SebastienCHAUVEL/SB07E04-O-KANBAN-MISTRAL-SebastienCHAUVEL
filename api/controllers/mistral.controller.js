import { askMistral } from "../utils/mistral.util.js";

export async function askIa(req, res) {
  const { prompt } = req.body;
  console.log(prompt);

  const mistralResponse = await askMistral(prompt, res);

  return res.json({ text: mistralResponse });
}

export async function spellChecker(req, res) {
  const { text } = req.body;
  console.log(text);

  const mistralResponse = await askMistral(
    `Peux-tu corriger les fautes d'orthographe dans le texte suivant en me fournissant **uniquement** le texte corrigé dans ta réponse :  "${text}"`,
    res
  );

  return res.json({ text: mistralResponse });
}
