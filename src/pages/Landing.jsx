import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgImage from "../assets/exchagerate.png";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="app-container flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
        <h2 className="text-4xl font-bold mb-4">
          Real-Time Currency Exchange Rates
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl">
          Convert currencies instantly using live exchange rate data.
        </p>

        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Start Converting
        </Link>
      </div>
    </>
  );
}

export default Landing;