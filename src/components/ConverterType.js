import React from 'react'
import styles from '../css/ConverterType.module.css'

const ConverterType = ({title, changeConverter}) => {
  return (
    <button onClick={() => changeConverter(title)} className={styles.button}>{title}</button>
  )
}

export default ConverterType