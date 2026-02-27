import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 shadow-md bg-white">
      <h1 className="text-xl font-bold">Currency Rate Converter</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;