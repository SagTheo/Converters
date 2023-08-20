import React from 'react'
import styles from '../css/UserInput.module.css'

const UserInput = () => {
  return (
    <div className={styles.userInputContainer}>
        <textarea className={styles.userInput} />
        <div className={styles.result}></div>
    </div>
  )
}

export default UserInput