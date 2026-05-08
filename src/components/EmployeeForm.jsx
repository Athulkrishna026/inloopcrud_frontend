import { useState, useEffect } from "react";

const EmployeeForm = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      department: "",
      salary: "",
    });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">

      {/* Glassmorphism Form */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-lg
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-8
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        "
      >

        {/* Heading */}
        <h2 className="
          text-3xl font-bold text-white text-center mb-8
        ">
          {initialData
            ? "Edit Employee"
            : "Add Employee"}
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="text-white block mb-2 font-medium">
            Employee Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter employee name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-white/10
              border border-white/20
              text-white
              placeholder-gray-300
              outline-none
              focus:ring-2 focus:ring-cyan-400
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-white block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-white/10
              border border-white/20
              text-white
              placeholder-gray-300
              outline-none
              focus:ring-2 focus:ring-cyan-400
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Department */}
        <div className="mb-5">
          <label className="text-white block mb-2 font-medium">
            Department
          </label>

          <input
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleChange}
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-white/10
              border border-white/20
              text-white
              placeholder-gray-300
              outline-none
              focus:ring-2 focus:ring-cyan-400
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-6">
          <label className="text-white block mb-2 font-medium">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            value={formData.salary}
            onChange={handleChange}
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-white/10
              border border-white/20
              text-white
              placeholder-gray-300
              outline-none
              focus:ring-2 focus:ring-cyan-400
              transition-all duration-300
            "
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r from-cyan-400 to-blue-500
            hover:from-cyan-500 hover:to-blue-600
            text-white
            font-semibold
            shadow-lg
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          {initialData
            ? "Update Employee"
            : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;