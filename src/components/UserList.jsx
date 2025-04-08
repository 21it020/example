import React from "react";
import UserInfo from "./UserInfo";

const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 40 },
    { id: 4, name: "Bob Brown", age: 35 },
  ];
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserInfo {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
