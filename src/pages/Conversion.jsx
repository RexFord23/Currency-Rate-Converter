import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ConversionContext } from "../context/ConversionContext";
import bgImage from "../assets/exchagerate.png";

function Conversion() {
  const { conversionData } = useContext(ConversionContext);

  if (!conversionData) {
    return (
      <>
        <Navbar />
        <div className="app-container">
          <p>No conversion data available.</p>
          <Link to="/dashboard" className="text-blue-600">
            Go Back
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="app-container" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Conversion Result
          </h2>

          <p className="mb-2">
            {conversionData.amount} {conversionData.from} =
          </p>

          <p>
            {conversionData.result} {conversionData.to}
          </p>

          <p>
            1 {conversionData.from} = {conversionData.rate} {conversionData.to}
          </p>

          <Link
            to="/dashboard"
          >
            Convert Again
          </Link>
        </div>
      </div>
    </>
  );
}

export default Conversion;