import { useState } from 'react';
import './App.css'
import ConverterType from './components/ConverterType';
import { converterTypes } from './content/converterTypes';

function App() {
  const [currConv, setCurrConv] = useState('Currency')

  return (
    <div className="App">
      {
        converterTypes.map(type => {
          return (
            <ConverterType key={type.key} title={type.title} changeConverter={setCurrConv} />
          )
        })
      }

      <div>{currConv}</div>
    </div>
  );
}

export default App;
