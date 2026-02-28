import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ConversionContext } from "../context/ConversionContext";
import bgImage from "../assets/exchagerate.png";

function Dashboard() {
  const navigate = useNavigate();
  const { setConversionData } = useContext(ConversionContext);

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load available currencies dynamically
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_API_KEY}/latest/USD`
        );
        const data = await res.json();
        setCurrencies(Object.keys(data.conversion_rates));
      } catch (err) {
        setError("Failed to load currencies.");
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!amount) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_API_KEY}/latest/${from}`
      );

      const data = await res.json();
      const rate = data.conversion_rates[to];
      const result = (amount * rate).toFixed(2);

      setConversionData({
        amount,
        from,
        to,
        result,
        rate,
      });

      navigate("/conversion");
    } catch (err) {
      setError("Conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <>
      <Navbar />
      <div className="app-container flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
        <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Currency Converter
          </h2>

          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border p-2 rounded mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="flex gap-4 mb-4">
            <select
              className="w-full border p-2 rounded"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>

            <select
              className="w-full border p-2 rounded"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSwap}
            className="w-full mb-4 bg-gray-200 py-2 rounded hover:bg-gray-300">
            Swap Currencies 
          </button>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="Convert">
            {loading ? "Converting..." : "Convert"}
          </button>

          {error && (
            <p className="mt-4 text-red-600 text-center">{error}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;