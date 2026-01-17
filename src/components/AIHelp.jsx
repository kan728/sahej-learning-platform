import { useState } from "react";

export default function AIHelp({ text }) {
  const [response, setResponse] = useState("");

  async function getHelp() {
    setResponse("Thinking...");
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Explain this very simply for a senior citizen: ${text}`
          }
        ]
      })
    });

    const data = await res.json();
    setResponse(data.choices[0].message.content);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button style={{ fontSize: "1.2rem" }} onClick={getHelp}>
        🤖 Explain Simply
      </button>
      {response && <p className="ai-response">{response}</p>}
    </div>
  );
}

