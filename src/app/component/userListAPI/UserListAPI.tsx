// UserListAPI.tsx

"use client"

import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

const UserListAPI: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network is not ok")
          }
          return response.json()
        })
        .then((data) => {
          setUsers(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
    }, 1000);
    return () => clearTimeout(timer)
  }, []);

  if (loading) {
    return <div><p style={{ color: "blue", fontSize: "20px" }}>... Loading</p></div>
  };

  if (error) {
    return <div><p>{error.message}</p></div>
  };

  const deleteUser = ((id: number) => {
    setUsers(users.filter((user) => user.id !== id))
  });

  const tagSpacing = { width: "20%", color: "#333" };

  return (
    <>
      <div>
        <h2>User List from jsonplaceholder API</h2>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h4 style={tagSpacing}>{user.name} - {user.username}</h4>
              <p style={tagSpacing}><strong>Email : </strong>{user.email}</p>
              <p style={tagSpacing}><strong>Address : </strong>{user.address.street} - {user.address.suite} - {user.address.city} - {user.address.zipcode}</p>
              <p style={tagSpacing}><strong>Phone : {user.phone}</strong></p>
              <p style={tagSpacing}><strong>Website : {user.website}</strong></p>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserListAPI

// name: string
// username: string
// email: string
// address =>
//    street: string
//    suite: string
//    city: string
//    zipcode: string
// phone: string (certains numéros sont composés de lettres)
// website: string

// https://jsonplaceholder.typicode.com/users
