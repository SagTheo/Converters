import React from 'react'

const ConvertButton = ({ fromTitle, toTitle, currConv }) => {
  // const formatConversion = `${selectFrom.value}_${selectTo.value}`

  return (
    <button onClick={() => {
      // console.log(formatConversion)
      //   console.log(currConv.rates[formatConversion])
    }}>
        Convert
    </button>
  )
}

export default ConvertButton