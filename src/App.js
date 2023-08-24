import { useState, useEffect } from 'react';
import './App.css'
import ConverterType from './components/ConverterType';
import SelectTag from './components/SelectTag';
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

  useEffect(() => {
    switch (currTitle) {
      case 'currency':
        setCurrConv(currency)
        setFromTitle('eur')
        setToTitle('doll')
        break
      case 'weight':
        setCurrConv(weight)
        setFromTitle('kg')
        setToTitle('lbs')
        break
      case 'distance':
        setCurrConv(distance)
        setFromTitle('km')
        setToTitle('mi')
        break
      default:
        setCurrConv(currency)
        setFromTitle('eur')
        setToTitle('doll')
    }
  }, [currTitle])

  return (
    <div className="App">
      {
        converterTypes.map(type => {
          return (
            <ConverterType key={type.key} title={type.title} changeConverter={setCurrTitle} />
          )
        })
      }

      <div>
        <SelectTag from={currConv.valueAndText.from} 
                   to={currConv.valueAndText.to}
                   fromSelectedValue={setFromTitle}
                   toSelectedValue={setToTitle} 
        />
        <UserInput />
        <ConvertButton fromTitle={fromTitle} toTitle={toTitle} currConv={currConv} />
      </div>

      <CustomSelectTag options={currConv.valueAndText.from} />
    </div>
  );
}

export default App;
