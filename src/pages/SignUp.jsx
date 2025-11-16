import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();

  const [allstate, setallstate] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setallstate({ ...allstate, [name]: value });
  }


  function validate() {
    const newErrors = {};

    if (!allstate.name.trim()) 
      newErrors.name = "Name is required";
    if (!allstate.email.includes("@")) 
      newErrors.email = "Valid email required";
    if (allstate.password.length < 6)
      newErrors.password = "Minimum 6 characters required";
    if (allstate.mobile.length !== 10)
      newErrors.mobile = "Mobile number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }


  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) 
      return;

    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allstate)
    });

    const data = await response.text();
    alert(data);

    if (response.ok) {
      navigate("/login"); 
    }
  }

  return (
    <div className="signup-page">
      <div className="formcard">
        <h1 className="headreg">Registration Form</h1>
        <div id="span"></div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Name:</label>
            <input type="text" name="name" value={allstate.name} onChange={handleChange} />
            {errors.name && <p className="err">{errors.name}</p>}
          </div>

          <div className="input">
            <label>Email:</label>
            <input type="text" name="email" value={allstate.email} onChange={handleChange} />
            {errors.email && <p className="err">{errors.email}</p>}
          </div>

          <div className="input">
            <label>Password:</label>
            <input type="password" name="password" value={allstate.password} onChange={handleChange} />
            {errors.password && <p className="err">{errors.password}</p>}
          </div>

          <div className="input">
            <label>Mobile:</label>
            <input type="text" name="mobile" value={allstate.mobile} onChange={handleChange} />
            {errors.mobile && <p className="err">{errors.mobile}</p>}
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
       <p className="login-link">Already have an account?{" "} 
          <NavLink to="/login"><span id="loginlink">Login</span></NavLink>
        </p>
    </div>
  );
}

export default Signup;

