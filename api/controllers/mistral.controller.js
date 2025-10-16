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

export async function translater(req, res) {
  const { text, lang } = req.body;
  console.log(text);

  const mistralResponse = await askMistral(
    `Peux-tu traduire le texte suivant en me fournissant **uniquement** le texte traduit dans ta réponse en langue "${lang}" : "${text}"`,
    res
  );

  return res.json({ text: mistralResponse });
}
