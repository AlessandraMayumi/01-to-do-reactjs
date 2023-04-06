// Component
import { TaskItem } from './TaskItem'
import { TaskEmpty } from './TaskEmpty'

// Style
import styles from './Task.module.css'


export function Task() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <div>
                    <strong className={styles.primary}>Tarefas criadas</strong>
                    <strong className={styles.count}>5</strong>
                </div>
                <div>
                    <strong className={styles.secondary}>Concluídas</strong>
                    <strong className={styles.count}>2 de 5</strong>
                </div>
            </div>
            <div>
                <TaskItem />
                <TaskItem />
                <TaskEmpty />
            </div>
        </div>
    )
}