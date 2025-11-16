import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Modal.css";

function Modal() {
  const navigate = useNavigate();
  const location = useLocation();
  const API = "http://localhost:8080/api/skills";

  const editSkill = location.state;
  const [form, setForm] = useState({
    id: editSkill?.id || null,
    name: editSkill?.name || "",
    skill: editSkill?.skill || "",
    experience: editSkill?.experience || "Less than 1 year",
    proficiency: editSkill?.proficiency || "Beginner",
  });

  
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }


  async function handleSubmit(e) {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    const url = form.id ? `${API}/${form.id}` : API;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Failed to save");
      }
       
      navigate("/dashboard");
    } 
    
    catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  }


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{form.id ? "Edit Skill" : "Add New Skill"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required />

          <label>Skill:</label>
          <input name="skill" value={form.skill} onChange={handleChange} required />

          <label>Experience:</label>
          <select name="experience" value={form.experience} onChange={handleChange}>
            <option>Less than 1 year</option>
            <option>1 - 2 years</option>
            <option>2 - 5 years</option>
            <option>More than 5 years</option>
          </select>

          <label>Proficiency:</label>
          <select name="proficiency" value={form.proficiency} onChange={handleChange}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <div className="modal-buttons">
            <button type="submit" disabled={submitting}>{submitting ? "Saving..." : "Save"}</button>
            <button type="button" className="close-btn" onClick={() => navigate("/dashboard")}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;