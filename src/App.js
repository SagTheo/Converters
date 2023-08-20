import { useState, useEffect } from 'react';
import './App.css'
import ConverterType from './components/ConverterType';
import SelectTag from './components/SelectTag';
import { converterTypes } from './content/converterTypes';
import { currency } from './content/currency';
import { weight } from './content/weight';
import { distance } from './content/distance';
import UserInput from './components/UserInput';

function App() {
  const [currTitle, setCurrTitle] = useState('currency')
  const [currConv, setCurrConv] = useState(currency)

  useEffect(() => {
    switch (currTitle) {
      case 'currency':
        setCurrConv(currency)
        break
      case 'weight':
        setCurrConv(weight)
        break
      case 'distance':
        setCurrConv(distance)
        break
      default:
        setCurrConv(currency)
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
        <SelectTag from={currConv.valueAndText.from} to={currConv.valueAndText.to} />
        <UserInput />
      </div>
    </div>
  );
}

export default App;
