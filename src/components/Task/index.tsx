import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'
import { ITask } from '../../App';


interface Props{
    task: ITask;
    onDelete: (taskId: string) => void
}

export function Task( {task, onDelete}: Props){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>
            <p>
                {task.title}
            </p>

            <button onClick={()=>(onDelete(task.id))}  className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}