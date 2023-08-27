import React, { useState } from 'react'
import styles from '../css/CustomSelectTag.module.css'

const CustomSelectTag = ({ options }) => {
  const [displayOptions, setDisplayOptions] = useState(false)

  return (
    <div className={styles.container}>
      <ul className={`${displayOptions ? styles.show : styles.hide} ${styles.ul}`}>
          {
              options.map(option => {
                  return (
                      <li className={styles.li} onClick={() => console.log(option.value)}>{option.text}</li>
                  )
              })
          }
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="16" 
           height="16" 
           fill="currentColor" 
           className={`bi bi-caret-down ${styles.arrow}`}
           viewBox="0 0 16 16"
           onClick={() => setDisplayOptions(!displayOptions)}
      >
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
      </svg>
    </div>
  )
}

export default CustomSelectTag