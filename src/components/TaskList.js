import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDeleteTask = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          category={task.category}
          text={task.text}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
