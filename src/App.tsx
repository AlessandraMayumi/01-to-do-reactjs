// Components
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

// Style
import './global.css';
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <NewTask />
        </div>
      </div>
    </>
  )
}

export default App
