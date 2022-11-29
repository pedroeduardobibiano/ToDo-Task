import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "teste2",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function CompletedTaskById(taskId: string) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={CompletedTaskById} />
    </>
  );
}
