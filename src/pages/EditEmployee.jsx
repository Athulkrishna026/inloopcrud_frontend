import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import EmployeeForm from "../components/EmployeeForm";

import API from "../api/employeeApi";

const EditEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] =
    useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    const res = await API.get(`/${id}`);

    setEmployee(res.data);
  };

  const updateEmployee = async (
    data
  ) => {
    await API.put(`/${id}`, data);

    navigate("/");
  };

  return (
    <div className="p-6">
      {employee && (
        <EmployeeForm
          initialData={employee}
          onSubmit={updateEmployee}
        />
      )}
    </div>
  );
};

export default EditEmployee;