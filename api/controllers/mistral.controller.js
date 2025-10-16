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
    `Peux-tu corriger les fautes d'orthographe dans le texte suivant en me fournissant uniquement le texte corrigé dans ta réponse (pas de voici le texte corrigé ou autres phrases d'introduction, pas de guillemets, je ne veux que le texte corrigé) :  '${text}'`,
    res
  );

  return res.json({ text: mistralResponse });
}

export async function translater(req, res) {
  const { text, lang } = req.body;
  console.log(text);

  const mistralResponse = await askMistral(
    `Peux-tu traduire le texte suivant en me fournissant dans ta réponse uniquement le texte traduit en langue '${lang}'(pas de voici la traduction ou autres phrases d'introduction, pas de guillemets, je ne veux que le texte traduit) : '${text}'`,
    res
  );

  return res.json({ text: mistralResponse });
}
