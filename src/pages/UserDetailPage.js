import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './UserDetailPage.css';

function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) return <div className="user-detail-container">Loading...</div>;

  return (
    <div className="user-detail-container">
      <h2 className="title">User Detail</h2>
      <div className="card">
        <img src={user.image} alt={user.firstName} />
        <div>
          <h3>{user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
