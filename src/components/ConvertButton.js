import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv }) => {
  const formattedConversion = `${fromTitle}_${toTitle}`

  return (
    <button onClick={() => {
      console.log(formattedConversion)
      console.log(currConv.rates[formattedConversion])
    }}>
        Convert
    </button>
  )
}

export default ConvertButton