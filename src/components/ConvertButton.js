import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv, userInput }) => {
  const formattedConversion = `${fromTitle}_${toTitle}`

  return (
    <button onClick={() => {
      console.log(formattedConversion)
      console.log(currConv.rates[formattedConversion])
      console.log(userInput)
    }}>
        Convert
    </button>
  )
}

export default ConvertButton