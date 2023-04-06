import { ClipboardText } from '@phosphor-icons/react'
import styles from './TaskEmpty.module.css'

export function TaskEmpty() {
    return (
        <div className={styles.outerEmpty}>
            <div className={styles.innerEmpty}>
                <div className={styles.icon}><ClipboardText size={70} /></div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seis itens a fazer</p>
            </div>
        </div>
    )
}