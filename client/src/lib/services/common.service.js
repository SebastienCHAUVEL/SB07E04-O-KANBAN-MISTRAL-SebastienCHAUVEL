import api from "../api";

export const spellCheck = async (text) => api("/spellcheck", "POST", { text });

export const translate = async (text, lang) =>
  api("/translate", "POST", { text, lang });
