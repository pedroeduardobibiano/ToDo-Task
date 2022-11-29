import toDoLogo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit} action="">
        <input
          onChange={onChangeTitle}
          value={title}
          type="text"
          id=""
          placeholder="Adicione uma nova tarefa"
          required
        />
        {title ? (
          <button className={styles.active}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        ) : (
          <button className={styles.inative}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        )}
      </form>
    </header>
  );
}
