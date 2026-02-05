import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">lighter</h2>

      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/markets">Markets</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
