import React from "react";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 12,
  });
  const handleChange = e =>{
    const { id, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [id]: value,
    }));
  }
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-black flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          Profile
        </h1>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name :
            <input
              type="text"
              className="focus:outline-none focus:ring-2 focus:ring-green-400 text-black rounded-2xl border border-gray-300 px-4 py-2 w-full"
              id="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-4 flex flex-col gap-4">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Age
            <input
              type="text"
              className="focus:outline-none focus:ring-2 focus:ring-green-400 text-black rounded-2xl border border-gray-300 px-4 py-2 w-full"
              id="age"
              placeholder="Enter your age"
              value={user.age}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="ml-auto gap-4">
        <h3 className="text-3xl font-bold text-green-600">Rofile</h3>
        <p className="text-xl font-bold text-green-600">Name : {user.name}</p>
        <p className="text-xl font-bold text-green-600">Age : {user.age}</p>
      </div>
    </div>
  );
};

export default Profile;
