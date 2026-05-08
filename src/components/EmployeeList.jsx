const EmployeeList = ({
  employees,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="
      min-h-screen
      px-4 py-10
      bg-gradient-to-br
      from-slate-900
      via-blue-900
      to-slate-800
    ">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="
          text-4xl font-extrabold
          text-white
          mb-2
        ">
          Employee Management
        </h1>

        <p className="text-gray-300">
          Manage all employees easily
        </p>
      </div>

      {/* Employee Cards */}
      <div className="
        grid
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="
              relative
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              rounded-3xl
              p-6
              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
              hover:scale-105
              transition-all duration-300
            "
          >

            {/* Glow Effect */}
            <div className="
              absolute inset-0
              rounded-3xl
              bg-gradient-to-r
              from-cyan-400/10
              to-blue-500/10
              blur-2xl
            "></div>

            {/* Content */}
            <div className="relative z-10">

              {/* Avatar */}
              <div className="
                w-16 h-16
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                flex items-center justify-center
                text-2xl font-bold text-white
                mb-5
              ">
                {employee.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="
                text-2xl font-bold
                text-white
                mb-3
              ">
                {employee.name}
              </h2>

              {/* Details */}
              <div className="space-y-2 text-gray-200">

                <p>
                  📧 {employee.email}
                </p>

                <p>
                  🏢 {employee.department}
                </p>

                <p className="
                  text-cyan-300
                  font-semibold
                  text-lg
                ">
                  ₹ {employee.salary}
                </p>
              </div>

              {/* Buttons */}
              <div className="
                mt-6
                flex gap-3
              ">

                <button
                  onClick={() =>
                    onEdit(employee._id)
                  }
                  className="
                    flex-1
                    py-2
                    rounded-xl
                    bg-gradient-to-r
                    from-yellow-400
                    to-orange-500
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(employee._id)
                  }
                  className="
                    flex-1
                    py-2
                    rounded-xl
                    bg-gradient-to-r
                    from-red-500
                    to-pink-600
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;