import { Trash } from '@phosphor-icons/react'
import styles from './TaskItem.module.css'

export interface TaskItemProps {
    id: string,
    content: string
}

export function TaskItem({ id, content }: TaskItemProps) {
    return (
        <div className={styles.container}>
            <input className={styles.input} type='checkbox' />
            <p className={styles.p}>
                {content}
            </p>
            <div className={styles.icon}><Trash size={28} /></div>
        </div>
    )
}