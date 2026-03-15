import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold"
      : "text-gray-700 hover:text-pink-600 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold text-gray-900">
          BOO
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
          <NavLink to="/pets" className={navClass}>
            Pets
          </NavLink>
          <NavLink to="/favorites" className={navClass}>
            Favorites
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;