import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Glassmorphism Navbar */}
        <div className="
          flex items-center justify-between
          px-8 py-4
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        ">
          
          {/* Logo */}
          <h1 className="
            text-3xl font-extrabold
            bg-gradient-to-r from-cyan-300 to-blue-500
            bg-clip-text text-transparent
            tracking-wide
          ">
            Employee System
          </h1>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            
            <Link
              to="/"
              className="
                relative px-5 py-2
                rounded-xl
                bg-white/10
                hover:bg-white/20
                border border-white/20
                transition-all duration-300
                hover:scale-105
                font-medium
              "
            >
              Home
            </Link>

            <Link
              to="/add"
              className="
                px-5 py-2
                rounded-xl
                bg-gradient-to-r from-cyan-400 to-blue-500
                hover:from-cyan-500 hover:to-blue-600
                shadow-lg
                transition-all duration-300
                hover:scale-105
                font-semibold
              "
            >
              Add Employee
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;