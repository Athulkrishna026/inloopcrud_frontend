import { useEffect, useState } from "react";

import API from "../api/employeeApi";

import EmployeeList from "../components/EmployeeList";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] =
    useState([]);

  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await API.get("/");

    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await API.delete(`/${id}`);

    fetchEmployees();
  };

  const editEmployee = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="p-6">
      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onEdit={editEmployee}
      />
    </div>
  );
};

export default Home;