import React, { useState } from "react";

function InputDataPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleAdd = () => {
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h2>Input Data (Local)</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>

      <h3>Local User List</h3>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InputDataPage;
