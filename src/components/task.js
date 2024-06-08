import React from "react";
import { useState } from "react";

export default function Task({ handelDelete, tasks }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* {filteredTasks.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
          <h2>{task.completed.toString()}</h2>
        </div>
      ))} */}
      
      {filteredTasks.map(function (task) {
        return (
          <table key={task.id}>
            <tr>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.completed}</td>
              <td>
                <button onClick={() => handelDelete(task.id)}>delete</button>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
