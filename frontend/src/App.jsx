import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar/Sidebar";


import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Trade from "./pages/Trade";
import Users from "./pages/Users";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      <div className="layout">
        {/* Sidebar solo si hay usuario logueado */}
        {user && <Sidebar user={user} onLogout={handleLogout} />}

        <main className="content">
          <Routes>
            {/* Login */}
            <Route
              path="/"
              element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
            />

            {/* Rutas protegidas */}
            <Route
              path="/about"
              element={user ? <About user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/portfolio"
              element={user ? <Portfolio user={user} /> : <Navigate to="/" />}
            />
            
            <Route
              path="/trade"
              element={user ? <Trade user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/users"
              element={user ? <Users user={user} /> : <Navigate to="/" />}
            />
            

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
