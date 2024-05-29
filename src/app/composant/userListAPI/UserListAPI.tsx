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
  website: string
}
const UserListAPI: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network is not ok");
          }
          return response.json();
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
    return <p>... Loading</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <h2>UserList</h2>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>
                <h4>{user.name} - {user.username}</h4>
                <p><strong>Email : </strong>{user.email}</p>
                <p><strong>Address : {user.address.street} - {user.address.suite} - {user.address.city} -{user.address.zipcode}</strong></p>
                <p><strong>Phone : </strong>{user.phone}</p>
                <p><strong>Website : </strong>{user.website}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
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
// phone: string (car il y a des lettres)
// website: string

// https://jsonplaceholder.typicode.com/users
