import React from "react";
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      setItems([...items, { name, quantity }]);
      setName("");
      setQuantity("");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-black flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
        Shopping List
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="focus:outline-none focus:ring-2 focus:ring-green-400 text-black rounded-2xl border border-gray-300 px-4 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="focus:outline-none focus:ring-2 focus:ring-green-400 text-black rounded-2xl border border-gray-300 px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-2xl"
        >
          Add to list
        </button>
      </form>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Items</h2>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.quantity}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ShoppingList;
