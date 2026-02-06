import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { path: "/", label: "Dashboard", end: true },
  { path: "/markets", label: "Markets" },
  { path: "/users", label: "Users" },
  { path: "/about", label: "About" },
  { path: "/login", label: "Login" }, // <-- nuevo link
];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <h2 className="logo">lighter</h2>

      <nav className="sidebar-nav">
        {navItems.map(({ path, label, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
