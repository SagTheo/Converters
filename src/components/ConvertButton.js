import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv }) => {
  const formatConversion = `${fromTitle}_${toTitle}`

  return (
    <button onClick={() => {
        console.log(currConv.rates[formatConversion])
    }}>
        Convert
    </button>
  )
}

export default ConvertButton