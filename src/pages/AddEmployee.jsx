import { useNavigate } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

import API from "../api/employeeApi";

const AddEmployee = () => {
  const navigate = useNavigate();

  const addEmployee = async (data) => {
    try {
      await API.post("/", data);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="p-6">
      <EmployeeForm
        onSubmit={addEmployee}
      />
    </div>
  );
};

export default AddEmployee;