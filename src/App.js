import './App.css';
import Input from './components/input';
import InputArea from './components/input-area';
import { useState } from 'react';

function App() {
  let result = 0;
  let position = 'inputArea';
  let operators = ['+', '-'];
  const [inputs, setInputs] = useState([]);

  function addInput() {
    setInputs([...inputs, true]);
  }

  return (
    <div className='vw-100 vh-100 bg-light'>
      <div className="App w-100 w-md-75 mx-auto container">
        {/* <div>
        <h2>JS DOM Version</h2>

        <div className='row m-5'>
          <button className='btn btn-primary' onClick={() => Input(position, operators)}>Add row</button>
        </div>

        <div className='row' id='inputArea'>
        </div>

        <div className='row py-5'>
          <p>Result: <span id="result" className='h5'>{result}</span></p>
        </div>
      </div>

      <hr></hr> */}

        <h1 className='pt-5'>REACT Components Version</h1>

        <button className='btn btn-primary my-4 w-auto rounded-4 p-2 px-4' onClick={addInput}>Add row</button>

        <div className='row justify-content-center'>
          <div className='row row-gap-3 m-1 border border-1 rounded-4 p-5 w-75' id='numberContainer' inputs={inputs}>
            <InputArea position={position} operators={operators} />
            <InputArea position={position} operators={operators} />
            <InputArea position={position} operators={operators} />
            {inputs.map(() => {
              return (<InputArea position={position} operators={operators} />)
            })}
          </div>
        </div>

        <div className='row py-5 justify-content-center'>
          <h5 className='bg-dark w-auto rounded-4 p-3 text-light'>Result: <span id="operation" className='h4'>0</span></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
