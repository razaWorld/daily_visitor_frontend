import React, { useState, createContext, useContext } from "react";

/* ------------------ Context ------------------ */

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role, email) => {
    setUser({ role, email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

/* ------------------ Layout ------------------ */

const MobileFrame = ({ children }) => {
  return (
    <div
      style={{
        width: 350,
        height: 650,
        margin: "40px auto",
        border: "2px solid black",
        borderRadius: 20,
        padding: 20,
        overflow: "auto",
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </div>
  );
};

/* ------------------ Landing ------------------ */

export const LandingScreen = ({ onSelectVisitor, onSelectResident }) => {
  return (
    <div>
      <h2>Visitor ali Management</h2>

      <button onClick={onSelectVisitor}>Visitor</button>

      <br />
      <br />

      <button onClick={onSelectResident}>Resident</button>
    </div>
  );
};

/* ------------------ Visitor Auth ------------------ */

const VisitorAuth = ({ onLogin, onBack }) => {
  return (
    <div>
      <h3>Visitor Login</h3>

      <button onClick={onLogin}>Login</button>

      <br />
      <br />

      <button onClick={onBack}>Back</button>
    </div>
  );
};

/* ------------------ Resident Auth ------------------ */

const ResidentAuth = ({ onLogin, onBack }) => {
  return (
    <div>
      <h3>Resident Login</h3>

      <button onClick={onLogin}>Login</button>

      <br />
      <br />

      <button onClick={onBack}>Back</button>
    </div>
  );
};

/* ------------------ Visitor Home ------------------ */

const VisitorApp = ({ onLogout }) => {
  return (
    <div>
      <h2>Visitor Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

/* ------------------ Resident Home ------------------ */

const ResidentApp = ({ onLogout }) => {
  return (
    <div>
      <h2>Resident Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

/* ------------------ Main Content ------------------ */

const AppContent = () => {
  const [view, setView] = useState("landing");
  const { login, logout } = useApp();

  const handleVisitorLogin = () => {
    login("visitor", "test@test.com");
    setView("visitor-home");
  };

  const handleResidentLogin = () => {
    login("resident", "test@test.com");
    setView("resident-home");
  };

  const handleLogout = () => {
    logout();
    setView("landing");
  };

  return (
    <MobileFrame>
      {view === "landing" && (
        <LandingScreen
          onSelectVisitor={() => setView("visitor-auth")}
          onSelectResident={() => setView("resident-auth")}
        />
      )}

      {view === "visitor-auth" && (
        <VisitorAuth
          onLogin={handleVisitorLogin}
          onBack={() => setView("landing")}
        />
      )}

      {view === "resident-auth" && (
        <ResidentAuth
          onLogin={handleResidentLogin}
          onBack={() => setView("landing")}
        />
      )}

      {view === "visitor-home" && <VisitorApp onLogout={handleLogout} />}

      {view === "resident-home" && <ResidentApp onLogout={handleLogout} />}
    </MobileFrame>
  );
};

/* ------------------ App ------------------ */

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}