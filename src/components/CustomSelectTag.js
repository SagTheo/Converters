import React from 'react'
import styles from '../css/CustomSelectTag.module.css'

const CustomSelectTag = ({ options }) => {
  return (
    <ul>
        {
            options.map(option => {
                return (
                    <li onClick={() => console.log(option.value)}>{option.text}</li>
                )
            })
        }
    </ul>
  )
}

export default CustomSelectTag