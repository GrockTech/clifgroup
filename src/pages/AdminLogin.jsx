import { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
console.log("API URL:", process.env.REACT_APP_API_URL);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });
     // console.log("API URL:", process.env.REACT_APP_API_URL);
      const data = await res.json();

      if (res.ok && data.success) {
        // Save token (if needed) and redirect
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      alert("Error connecting to server: " + err.message);
    }
  };

  return (
    <div className="container mt-4 pt-4">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
