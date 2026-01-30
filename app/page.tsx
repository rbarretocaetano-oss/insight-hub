export default function Home() {
  const isBrazil =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().includes("pt");

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Insight Hub 🚀</h1>
      <p>
        {isBrazil
          ? "Seu banco de palpites está no ar. Rumo ao acerto."
          : "Your prediction hub is live. Moving toward accuracy."}
      </p>
    </main>
  );
}
