import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/login", label: "Login" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/trade", label: "Trade" },
  { path: "/users", label: "Users" }
];


function Sidebar({ user, onLogout }) {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <h2 className="logo">lighter</h2>

      {/* Mostrar nombre del usuario */}
      {user && (
        <div className="sidebar-user">
          Bienvenido, <strong>{user.nombre}</strong>
        </div>
      )}

      <nav className="sidebar-nav">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
