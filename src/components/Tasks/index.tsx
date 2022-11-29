import { Task } from "../Task";
import { ITask } from "../../App";
import styles from "./tasks.module.css";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.isCompleted === true
  ).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {taskQuantity}
          </span>
        </div>
      </header>

      <div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          );
        })}
      </div>
    </section>
  );
}
