import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

import React from "react";

const UpdateUser = () => {
  const { handleChange } = useContext(UserContext);
  const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newName.trim()){
            handleChange(newName);
            setNewName("");
        }
    }
  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
