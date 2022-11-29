import toDoLogo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import {AiOutlinePlusCircle} from 'react-icons/ai'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />

      <form className={styles.newTaskForm} action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Adicione uma nova tarefa"
        />
        <button>Criar
            <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  );
}
