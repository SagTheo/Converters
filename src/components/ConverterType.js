import React from 'react'
import styles from '../css/ConverterType.module.css'

const ConverterType = ({title, changeConverter, resetUserInput, resetResult}) => {
  return (
    <button onClick={() => {
      changeConverter(title)
      resetUserInput('')  
      resetResult('')
    }} 
    className={styles.button}>
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
 
export default ConverterType