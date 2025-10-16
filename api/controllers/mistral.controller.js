import { text } from "express";

export async function askMistral(req, res) {
  const { prompt } = req.body;
  console.log(prompt);
  const response = await fetch(
    `${process.env.MISTRAL_BASE_URL}${process.env.MISTRAL_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );
  if (!response.ok) {
    const details = await response.text();
    return res
      .status(response.status)
      .json({ error: true, message: response.statusText, details });
  }
  const data = await response.json();
  console.log(data);
  console.log(data.choices[0].message.content);
  return res.json({ text: data.choices[0].message.content });
}
