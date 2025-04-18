import React, { useState } from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState(["hello", "hey", "bye"])
  const [newTask, setNewTask] = useState("")

  const handleInput = (e) => {
    setNewTask(e.target.value)
  }

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask])
      setNewTask("")
    }
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-300 px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">Todo App</h1>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleInput}
            className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition-all"
          >
            Add
          </button>
        </div>
        <ol className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-indigo-100 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-800">{task}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-sm text-red-500 font-semibold hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Todo
