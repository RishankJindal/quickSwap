import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch users and skills from API (replace with your backend URL)
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("/api/admin/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400">Admin Dashboard</h1>

      {/* Users Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Users</h2>
        <div className="bg-gray-800 p-4 rounded-md mt-2">
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border-b border-gray-700 py-2">
                {user.name} - {user.email}
                <button className="ml-4 text-red-500 hover:underline">❌ Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Offered Skills</h2>
        <div className="bg-gray-800 p-4 rounded-md mt-2">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id} className="border-b border-gray-700 py-2">
                {skill.name} - {skill.category}
                <button className="ml-4 text-red-500 hover:underline">❌ Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
