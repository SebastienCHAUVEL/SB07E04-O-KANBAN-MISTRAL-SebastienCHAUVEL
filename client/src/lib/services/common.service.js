import api from "../api";

export const spellCheck = async (text) => api("/spellcheck", "POST", { text });
