import { useEffect } from 'react'
import styles from '../css/UserInput.module.css'

const UserInput = ({ currTitle, setUserInput }) => {
  useEffect(() => {
    const userInput = document.getElementById('userInput')
    userInput.value = ''
  }, [currTitle])

  return (
    <div className={styles.userInputContainer}>
        <input className={styles.userInput} 
               id='userInput'
               onChange={e => setUserInput(e.target.value)}
        />
        <div className={styles.result}></div>
    </div>
  )
}

export default UserInput