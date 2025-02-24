import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  // Handle editing the to-do
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, editedTask);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center mb-2">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex-grow">
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="border p-2 w-full"
          />
        </form>
      ) : (
        <span
          className={`flex-grow ${todo.completed ? "line-through" : ""}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.task}
        </span>
      )}

      <button
        className={`mx-2 ${todo.completed ? "bg-green-500" : "bg-gray-500"} text-white p-2`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button
        className="bg-red-500 text-white p-2"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
