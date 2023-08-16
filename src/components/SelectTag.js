import React from 'react'

const SelectTag = ({from, to}) => {
  return (
    <div>
      <select>
          {
              from.map(option => {
                  return (
                      <option value={option.value}>{option.text}</option>
                  )
              }) 
          }
      </select>
      <select>
        {
            to.map(option => {
                return (
                    <option value={option.value}>{option.text}</option>
                )
            }) 
        }
      </select>  
    </div>
  )
}

export default SelectTag