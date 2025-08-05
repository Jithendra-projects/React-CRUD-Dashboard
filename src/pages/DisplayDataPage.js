import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DisplayDataPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      {users.map((user) => (
        <Link
          to={`/user/${user.id}`}
          key={user.id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <img src={user.image} alt={user.firstName} />
            <div>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DisplayDataPage;
