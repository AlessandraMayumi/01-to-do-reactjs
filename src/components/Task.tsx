import { v4 as uuidv4 } from 'uuid';
// Component
import { TaskItem, TaskItemProps } from './TaskItem'
import { TaskEmpty } from './TaskEmpty'

// Style
import styles from './Task.module.css'
import { useState } from 'react'


export function Task() {
    // initital state value
    const initialTaskList: Array<TaskItemProps> = []
    // state
    const [taskList, setTaskList] = useState(initialTaskList)
    const [newTask, setNewTask] = useState('')
    const [count, setCount] = useState(0)
    const [countComplete, setCountComplete] = useState(0)

    function toggleIsComplete(id: string) {
        let countCompleteUpdate = 0 // update countComplete state
        const taskListUpdated = taskList.map(task => {
            if (task.id === id) {
                countCompleteUpdate += task.isComplete ? 0 : 1
                return { ...task, isComplete: !task.isComplete }
            }
            countCompleteUpdate += task.isComplete ? 1 : 0
            return task;
        })
        setCountComplete(countCompleteUpdate)
        setTaskList(taskListUpdated)
    }

    function handleNewTask() {
        const item = {
            id: uuidv4(),
            content: newTask,
            isComplete: false,
        }
        setCount(taskList.length + 1)
        setTaskList([...taskList, item])
    }

    return (
        <div className={styles.container}>
            <label className={styles.newTask}>
                <input
                    className={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    onChange={e => { setNewTask(e.target.value) }}
                    value={newTask} />
                <button className={styles.button} onClick={handleNewTask} >
                    Criar
                </button>
            </label>
            <div className={styles.tasks}>
                <div className={styles.intro}>
                    <div>
                        <strong className={styles.primary}>Tarefas criadas</strong>
                        <strong className={styles.count}>{count}</strong>
                    </div>
                    <div>
                        <strong className={styles.secondary}>Concluídas</strong>
                        <strong className={styles.count}>{countComplete} de {count}</strong>
                    </div>
                </div>
                <div>
                    {!taskList.length && <TaskEmpty />}
                    {taskList.map(item => {
                        return <TaskItem
                            key={item.id}
                            toggleIsComplete={toggleIsComplete}
                            {...item} />
                    })}
                </div>
            </div>
        </div>
    )
}