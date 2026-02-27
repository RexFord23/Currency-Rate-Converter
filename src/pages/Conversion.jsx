import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ConversionContext } from "../context/ConversionContext";

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
      <div className="app-container ">
        <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Conversion Result
          </h2>

          <p className="mb-2">
            {conversionData.amount} {conversionData.from} =
          </p>

          <p className="text-3xl font-bold mb-2">
            {conversionData.result} {conversionData.to}
          </p>

          <p className="text-gray-600">
            1 {conversionData.from} = {conversionData.rate} {conversionData.to}
          </p>

          <Link
            to="/dashboard"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Convert Again
          </Link>
        </div>
      </div>
    </>
  );
}

export default Conversion;