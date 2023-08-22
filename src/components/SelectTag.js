import React from 'react'

const SelectTag = ({from, to}) => {
    const test = el => {
        // on the right way
        console.log(el.target[0].value)
    }

    return (
        <div>
        <select onChange={(e) => test(e)}>
            {
                from.map(option => {
                    return (
                        <option value={option.value}>{option.text}</option>
                    )
                }) 
            }
        </select>
        <select onChange={(e) => test(e)}>
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