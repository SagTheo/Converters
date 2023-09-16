import React from 'react'
import styles from '../css/UserInput.module.css'

const UserInput = ({ setUserInput }) => {
  return (
    <div className={styles.userInputContainer}>
        <textarea className={styles.userInput} onChange={e => setUserInput(e.target.value)} />
        <div className={styles.result}></div>
    </div>
  )
}

export default UserInput