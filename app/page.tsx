export default function Home() {
  const isBrazil =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().includes("pt");

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Insight Hub 🚀</h1>
      <p>
        {isBrazil
          ? "O hub de insights está no ar."
          : "The insights hub is live."}
      </p>
    </main>
  );
}
