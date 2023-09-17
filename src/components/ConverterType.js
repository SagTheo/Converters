import React from 'react'
import styles from '../css/ConverterType.module.css'

const ConverterType = ({title, changeConverter, resetUserInput}) => {
  return (
    <button onClick={() => {
      changeConverter(title)
      resetUserInput('')  
    }} 
    className={styles.button}>
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
 
export default ConverterType