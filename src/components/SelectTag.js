import React from 'react'

const SelectTag = ({from, to, fromSelectedValue, toSelectedValue}) => {
    return (
        <div>
        <select onChange={(e) => fromSelectedValue(e.target[e.target.selectedIndex].value)}>
            {
                from.map(option => {
                    return (
                        <option value={option.value}>{option.text}</option>
                    )
                }) 
            }
        </select>
        <select onChange={(e) => toSelectedValue(e.target[e.target.selectedIndex].value)}>
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