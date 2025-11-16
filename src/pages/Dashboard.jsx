import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Dashboard.css"; 
import modal from "./Modal"

function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list"); 

  const API = "http://localhost:8080/api/skills";
  const navigate = useNavigate();

  useEffect(() => {
    fetchSkills();
  }, []);

  async function fetchSkills() {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setSkills(data);
    } 
    catch (err) {
      console.error(err);
    } 
    finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this record?")) 
      return;

    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setSkills(skills.filter((s) => s.id !== id));
    } 
    catch (err) {
      console.error("Delete failed", err);
    }
  }

  function handleEdit(skill) {
    navigate("/modal", { state: skill });
  }

  return (
    <div className="container-main">
      <div style={{ textAlign: "center", marginTop: "26px" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold",paddingTop: "40px" }}>Skill Management App</h1>
          <p className="app-subtitle">Manage your teams skills, experience and proficiency in one simple view</p>
      </div>

      <div className="add-btn-container"> 
        <NavLink to="/modal" className="add-btn">
          <span className="btn">+ Add Skill</span>
        </NavLink>


        <button onClick={() => setView(view === "list" ? "grid" : "list")} className="toggle-btn">
          {view === "list" ? "Switch to Grid View" : "Switch to List View"}
        </button>
      </div>

      <div className="table-container">
        {loading ? ( <p>Loading...</p> ) : skills.length === 0 ? ( <p>No records</p>) : view === "list" ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Skill</th>
                <th>Experience</th>
                <th>Proficiency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.skill}</td>
                  <td>{s.experience}</td>
                  <td>{s.proficiency}</td>
                  <td>
                    <button onClick={() => handleEdit(s)} className="action-btn edit">Edit</button>
                    <button onClick={() => handleDelete(s.id)} className="action-btn danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : 
        

        ( <div className="grid-container">
            {skills.map((s) => (
              <div key={s.id} className="skill-card">
                <h3><span id="skillname">{s.skill}</span></h3>
                <p><strong>Name:</strong> {s.name}</p>
                <p><strong>Experience:</strong> {s.experience}</p>
                <p><strong>Proficiency:</strong> {s.proficiency}</p>
                <div className="card-actions">
                  <button onClick={() => handleEdit(s)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(s.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
