import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function validate() {
    const newErrors = {};

    if (!state.email.includes("@")) 
      newErrors.email = "Valid email required";
    if (state.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) 
      return;

    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });

    const data = await response.text();
    alert(data);

    if (response.ok) {
      navigate("/dashboard"); 
    }
  }

  return (
    <div className="login-page">
      <div className="formcard">
        <h1 className="headreg">Login</h1>
        <div id="span"></div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Email:</label>
            <input type="text" name="email" value={state.email} onChange={handleChange} />
            {errors.email && <p className="err">{errors.email}</p>}
          </div>

          <div className="input">
            <label>Password:</label>
            <input type="password" name="password" value={state.password} onChange={handleChange} />
            {errors.password && <p className="err">{errors.password}</p>}
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
       <p className="login-link"> Don't have an account?{" "}
          <NavLink to="/"><span id="loginlink">Register</span></NavLink>
        </p>
    </div>
  );
}
export default Login;
