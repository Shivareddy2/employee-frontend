import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EditEmployee() {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error("Error loading employee:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then(() => navigate("/"))
      .catch((err) => console.error("Error updating employee:", err));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={employee.email} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success me-2">Update</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default EditEmployee;
