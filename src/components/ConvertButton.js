import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv, userInput, setResult }) => {
  const formattedConversion = `${fromTitle}_${toTitle}`

  return (
    <button onClick={() => {
      let parsedInput = Number(userInput)
      const controlInput = parsedInput / 1

      if (controlInput !== parsedInput) {
        alert('Please enter a valid number')
      } else if (!Object.hasOwn(currConv.rates, formattedConversion)) {
        alert('Values can not be the same in both dropdown lists')
      } else {
        const result = Math.floor((parsedInput * currConv.rates[formattedConversion]) * 100) / 100
        setResult(result)
      }
    }}>
        Convert
    </button>
  )
}

export default ConvertButton