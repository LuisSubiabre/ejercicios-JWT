import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))

    }

  }, []);



  return (
    <div>
      {user ? (
        <p>Email: {user.email}</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default Profile;
