import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    setLoading(true);
    EmployeeService.getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error loading employees:", err))
      .finally(() => setLoading(false));
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.deleteEmployee(id)
        .then(() => loadEmployees())
        .catch((err) => console.error("Error deleting employee:", err));
    }
  };

  if (loading) return <p className="text-center mt-3">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center">Employee List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Employee</Link>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => deleteEmployee(emp.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
