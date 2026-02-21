import { useState } from "react";

function Dashboard() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("GHS");
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    const res = await fetch(
      `https://api.exchangerate.host/latest?base=${from}`
    );
    const data = await res.json();
    const rate = data.rates[to];
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GHS">GHS</option>
        <option value="EUR">EUR</option>
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GHS">GHS</option>
        <option value="EUR">EUR</option>
      </select>

      <button onClick={handleConvert}>Convert</button>

      {result && <h3>Converted Amount: {result}</h3>}
    </div>
  );
}

export default Dashboard;