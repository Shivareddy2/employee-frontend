import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
