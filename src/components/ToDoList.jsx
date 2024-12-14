import React, { useState } from "react";
import { dela } from "../data.js";

export default function ToDoList(props) {
  const [tasks, setTasks] = useState(dela);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_i, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>Ту ду лист на Реакте:</h1>

      <div>
        <input
          type="text"
          placeholder="Введите дело"
          value={newTask}
          onChange={handleInputChange}
        ></input>

        <button className="add-button" onClick={addTask}>
          Добавить
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
