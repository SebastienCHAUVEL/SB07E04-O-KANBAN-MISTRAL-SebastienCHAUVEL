import "dotenv/config";

export async function checkMistralResponse(response, res) {
  if (!response.ok) {
    const details = await response.text();
    console.error("Mistral API error:", details);
    return res
      .status(response.status)
      .json({ error: true, message: response.statusText, details });
  }
  const data = await response.json();
  console.log(data);
  console.log(data.choices[0].message.content);
  return data.choices[0].message.content;
}

export async function askMistral(content, res) {
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
            content,
          },
        ],
      }),
    }
  );
  return checkMistralResponse(response, res);
}
