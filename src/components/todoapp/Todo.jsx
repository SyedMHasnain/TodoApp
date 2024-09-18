import React from "react";
import "./todo.css";
const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewtodo] = React.useState("");

  const handleinput = (e) => {
    setNewtodo(e.target.value);
  };
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewtodo("");
    }
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">To-Do App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTodo}
            onChange={handleinput}
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index} className="todo-item">
              {item}
              <button
                onClick={() => deleteTodo(index)}
                className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* <h1>Todo App </h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={newTodo}
        onChange={handleinput}
      />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add</button> */}
    </>
  );
};

export default Todo;
