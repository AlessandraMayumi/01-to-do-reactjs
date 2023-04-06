// Components
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

// Style
import './global.css';
import styles from './App.module.css'
import { Task } from './components/Task';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <NewTask />
          <Task />
        </div>
      </div>
    </>
  )
}

export default App
