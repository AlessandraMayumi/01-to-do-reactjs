import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask() {
    return (
        <div className={styles.container}>
            <input placeholder="Adicione uma nova tarefa" className={styles.input} />
            <button className={styles.button}>
                Criar
            </button>
        </div>
    )
}