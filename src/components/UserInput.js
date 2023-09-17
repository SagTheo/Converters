import React, { useEffect, useState } from 'react'
import styles from '../css/UserInput.module.css'

const UserInput = ({ currTitle, setUserInput }) => {
  const [inputValue, setInputValue] = useState()

  useEffect(() => {
    setInputValue('')
  }, [currTitle])

  return (
    <div className={styles.userInputContainer}>
        <textarea className={styles.userInput} 
                  onChange={e => setUserInput(e.target.value)}
        >{inputValue}</textarea>
        <div className={styles.result}></div>
    </div>
  )
}

export default UserInput