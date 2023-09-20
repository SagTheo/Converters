import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv, userInput, setResult }) => {
  const formattedConversion = `${fromTitle}_${toTitle}`

  return (
    <button onClick={() => {
      let parsedInput = Number(userInput)
      const controlInput = parsedInput / 1

      if (controlInput !== parsedInput) {
        alert('Please enter a valid number')
      } else {
        setResult(parsedInput * currConv.rates[formattedConversion])
      }
    }}>
        Convert
    </button>
  )
}

export default ConvertButton