// Component
import { TaskItem, TaskItemProps } from './TaskItem'
import { TaskEmpty } from './TaskEmpty'

// Style
import styles from './Task.module.css'
import { useState } from 'react'


export function Task() {
    // initital state value
    const initialTaskList: Array<TaskItemProps> = [{id:'id', content: 'batata'}]
    // state
    const [taskList, setTaskList] = useState(initialTaskList)

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
                {!taskList.length && <TaskEmpty />}
                {taskList.map(item => {
                    return <TaskItem {...item} />
                })}
            </div>
        </div>
    )
}