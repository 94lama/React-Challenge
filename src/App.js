import './App.css';
import InputArea from './components/InputArea';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);
  const [inputs, setInputs] = useState([true, true, true]);
  const symbols = ['+', '-'];
  let total = 0

  function calculateResult() {
    let inputs = document.getElementsByClassName("input-number");
    Object.values(inputs).forEach(number => {
      if (number.disabled) { return null }
      const value = Number(number.value);
      let symbol = number.parentNode.childNodes[0].selectedOptions[0].value;
      total = symbol === symbols[0] ? total + value :
        symbol === symbols[1] ? total - value : 0;
    });
    setResult(total);
  }

  function addInput() {
    setInputs([...inputs, true]);
  }

  return (
    <div className='vw-100 vh-100 bg-light'>
      <div className="App w-100 w-md-75 mx-auto container">

        <h1 className='pt-5'>REACT Simple Calculator</h1>

        <button className='btn btn-primary my-4 w-auto rounded-5 p-2 px-4' onClick={addInput}>Add row</button>

        <div className='row justify-content-center'>
          <div className='row row-gap-3 m-1 border border-1 rounded-5 p-5 w-75' id='numberContainer' inputs={inputs}>
            {inputs.map((x, index) => {
              return (<InputArea position='inputArea' calculate={() => calculateResult()} key={index} />)
            })}
          </div>
        </div>

        <div className='row py-5 justify-content-center'>
          <h5 className='bg-dark w-auto rounded-5 p-3 text-light px-4'>Result: {result}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
