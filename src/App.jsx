import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>JWT Auth App 🚀</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
      </div>

      {page === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default App;
