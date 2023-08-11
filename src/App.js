import './App.css'
import ConverterType from './components/ConverterType';

function App() {
  const converterTypes = [
    { key: '1', title: 'Currency'},
    { key: '2', title: 'Weight'},
    { key: '3', title: 'Distance'}
  ]

  return (
    <div className="App">
      {
        converterTypes.map(type => {
          return (
            <ConverterType key={type.key} title={type.title} />
          )
        })
      }
    </div>
  );
}

export default App;
