import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Employee App</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Employees</Link>
        <Link className="nav-link" to="/add">Add Employee</Link>
      </div>
    </div>
  </nav>
);

export default Header;
