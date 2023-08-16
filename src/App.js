import { useState } from 'react';
import './App.css'
import ConverterType from './components/ConverterType';
import SelectTag from './components/SelectTag';
import { converterTypes } from './content/converterTypes';
import { currency } from './content/currency';
import { weight } from './content/weight';
import { distance } from './content/distance';

function App() {
  const [currConv, setCurrConv] = useState(currency)

  return (
    <div className="App">
      {
        converterTypes.map(type => {
          return (
            <ConverterType key={type.key} title={type.title} changeConverter={setCurrConv} />
          )
        })
      }

      <div>
        {/* Use useEffect to dynamically change which file from and to data are imported from? */}
        <SelectTag from={currConv.valueAndText.from} to={currConv.valueAndText.to} />
      </div>
    </div>
  );
}

export default App;
