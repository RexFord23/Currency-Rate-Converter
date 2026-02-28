import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md rounded-b-3xl">
      <h1 className="text-xl font-bold text-indigo-600">Currency Converter</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
          Home
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 transition">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;