import React from 'react'

const SelectTag = (name, options) => {
  return (
    <select name={name}>
        {
            options.map(option => {
                return (
                    <option value={option.value}>{option.text}</option>
                )
            }) 
        }
    </select>
  )
}

export default SelectTag