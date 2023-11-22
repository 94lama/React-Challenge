import './App.css';
import InputArea from './components/InputArea';
import { useState } from 'react';

function App() {
  let result = 0;
  const position = 'inputArea';
  const [inputs, setInputs] = useState([]);

  function addInput() {
    setInputs([...inputs, true]);
  }

  return (
    <div className='vw-100 vh-min-100 bg-light'>
      <div className="App w-100 w-md-75 mx-auto container">

        <h1 className='pt-5'>REACT Components Version</h1>

        <button className='btn btn-primary my-4 w-auto rounded-5 p-2 px-4' onClick={addInput}>Add row</button>

        <div className='row justify-content-center'>
          <div className='row row-gap-3 m-1 border border-1 rounded-5 p-5 w-75' id='numberContainer' inputs={inputs}>
            <InputArea position={position} />
            <InputArea position={position} />
            <InputArea position={position} />
            {inputs.map((element, index) => {
              return (<InputArea position={position} key={index} />)
            })}
          </div>
        </div>

        <div className='row py-5 justify-content-center'>
          <h5 className='bg-dark w-auto rounded-5 p-3 text-light px-4'>Result: <span id="result" className='h4'>0</span></h5>
        </div>
      </div>
    </div>
  );
}

export default App;
