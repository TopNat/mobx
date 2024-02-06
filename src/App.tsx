import React, { useState } from "react";
import "./App.css";
import { useDataStore } from "./store/context";
import { TodoList } from "./store/todos";

const style = {
  display: "flex",
  gap: "20px",
  border: "1px solid white",
  radius: "15px",
  padding: "15px",
  "border-radius": "15px",
};

function App() {
  const store = useDataStore();
  const [todoValue, setTodoValue] = useState({
    name: "",
    priority: "low",
  });
  const [filterTodo, setFilterTodo] = useState("");

  const addTodo = () => {
    if (todoValue.name === "") {
      return;
    }
    store.todos.addNewTodo(todoValue);
    setTodoValue({
      name: "",
      priority: "low",
    });
  };

  const delTodo = (name: string) => {   
    store.todos.delTodoList(name);
    console.log(store.todos.todoList);
  };

  const todos: TodoList[] = filterTodo.length
    ? store.todos.filterByPriority(filterTodo)
    : store.todos.todoList;

  //console.log(store.todos.todoList);
  return (
    <div className="App">
      <header className="App-header">
        <div style={style}>
          <input
            type="text"
            onChange={(e) =>
              setTodoValue({ ...todoValue, name: e.target.value })
            }
            value={todoValue.name}
          />
          <select
            name="priority"
            value={todoValue.name}
            onChange={(e) => {
              setTodoValue({ ...todoValue, priority: e.target.value });
            }}
          >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </select>
          <button onClick={addTodo}>Добавить задачу</button>
        </div>
        <label>Фильтр:</label>
        <select
          name="filterPriority"
          value={filterTodo}
          onChange={(e) => {
            setFilterTodo(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.name} {todo.priority}{" "}
              <button
                onClick={(e) => {
                  delTodo(todo.name);
                }}
              >
                Del
              </button>
               {" "}<button>Edit</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
