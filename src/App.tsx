// Components
import { Header } from './components/Header';

// Style
import './global.css';
import styles from './App.module.css'
import { Task } from './components/Task';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  )
}

export default App
