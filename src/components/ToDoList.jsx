import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [newTask, setNewTask] = useState("");

  // Handle the form submission to add a new to-do
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
