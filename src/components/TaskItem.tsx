import { Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'

export interface TaskItemProps {
    id: string,
    content: string
    isComplete: boolean
}

interface TaskItemComponentProps extends TaskItemProps {
    toggleIsComplete: Function
    deleteTask: Function
}

export function TaskItem(props: TaskItemComponentProps) {
    const { id, content, isComplete, toggleIsComplete, deleteTask } = props
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type='checkbox'
                checked={isComplete}
                onChange={() => toggleIsComplete(id)}
            />
            <p className={styles.p}>
                {content}
            </p>
            <div
                className={styles.icon}
                onClick={() => deleteTask(id)}>
                <Trash size={28} />
            </div>
        </div>
    )
}