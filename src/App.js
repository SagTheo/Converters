import { useState, useEffect } from 'react';
import './App.css'
import ConverterType from './components/ConverterType';
import { converterTypes } from './content/converterTypes';
import { currency } from './content/currency';
import { weight } from './content/weight';
import { distance } from './content/distance';
import UserInput from './components/UserInput';
import ConvertButton from './components/ConvertButton';
import CustomSelectTag from './components/CustomSelectTag';

function App() {
  const [currTitle, setCurrTitle] = useState('currency')
  const [currConv, setCurrConv] = useState(currency)
  const [fromTitle, setFromTitle] = useState()
  const [toTitle, setToTitle] = useState()
  const [fromDefaultOption, setFromDefaultOption] = useState()
  const [toDefaultOption, setToDefaultOption] = useState()
  const [userInput, setUserInput] = useState()

  useEffect(() => {
    switch (currTitle) {
      case 'currency':
        setCurrConv(currency)
        setFromTitle('eur')
        setToTitle('doll')
        setFromDefaultOption(currency.valueAndText.from[0].text)
        setToDefaultOption(currency.valueAndText.to[0].text)
        break
      case 'weight':
        setCurrConv(weight)
        setFromTitle('kg')
        setToTitle('lbs')
        setFromDefaultOption(weight.valueAndText.from[0].text)
        setToDefaultOption(weight.valueAndText.to[0].text)
        break
      case 'distance':
        setCurrConv(distance)
        setFromTitle('km')
        setToTitle('mi')
        setFromDefaultOption(distance.valueAndText.from[0].text)
        setToDefaultOption(distance.valueAndText.to[0].text)
        break
      default:
        setCurrConv(currency)
        setFromTitle('eur')
        setToTitle('doll')
        setFromDefaultOption(currency.valueAndText.from[0].text)
        setToDefaultOption(currency.valueAndText.to[0].text)
    }
  }, [currTitle])

  return (
    <div className="App">
      {
        converterTypes.map(type => {
          return (
            <ConverterType key={type.key} 
                           title={type.title} 
                           changeConverter={setCurrTitle}
                           resetUserInput={setUserInput} />
          )
        })
      }

      <div>
        <div className='customSelectTags'>
          <CustomSelectTag options={currConv.valueAndText.from} 
                           setSelectedValue={setFromTitle}
                           defaultOption={fromDefaultOption}
                           setDefaultOption={setFromDefaultOption}
          />
          <CustomSelectTag options={currConv.valueAndText.to} 
                           setSelectedValue={setToTitle}
                           defaultOption={toDefaultOption} 
                           setDefaultOption={setToDefaultOption}
          />  
        </div>
        <UserInput currTitle={currTitle} setUserInput={setUserInput} />
        <ConvertButton fromTitle={fromTitle} 
                       toTitle={toTitle} 
                       currConv={currConv} 
                       userInput={userInput} />
      </div>
    </div>
  );
}

export default App;
