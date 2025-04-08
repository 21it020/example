import { useState } from 'react'
import React from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">🌿 Todo List</h1>
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-all"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-50 px-4 py-3 rounded-xl shadow-sm border border-gray-200 text-black gap-2 flex items-center justify-between transition-all hover:bg-gray-100"    
            >
              {todo}
              <button className='ml-auto text-white' onClick={()=>{
                setTodos(todos.filter(item => item !== todo))
                }}>Delete</button>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
