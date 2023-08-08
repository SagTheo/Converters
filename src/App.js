import { useState } from 'react';
import './App.css'
import SelectTag from './components/SelectTag';

function App() {
  const [test, setTest] = useState([
    { 'value' : 'value1', 'text' : 'text1' },
    { 'value' : 'value2', 'text' : 'text2' },
    { 'value' : 'value3', 'text' : 'text3' }
  ])

  return (
    <div className="App">
      <SelectTag name={'test'} options={test} />
    </div>
  );
}

export default App;
