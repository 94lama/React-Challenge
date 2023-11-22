import { useState } from "react";

export default function InputArea(props) {

    function calculate(){
        let inputs = document.getElementsByClassName("input-number");
            let result = 0;
            Object.values(inputs).forEach(element=>{
                let operator = element.parentNode.childNodes[0].selectedOptions[0].innerText;
                if(element.value && !element.disabled){
                    result += operator;
                    result += element.value;
                }
            })
            let resultText = document.getElementById('operation');
            resultText.innerText = Number(eval(result))?eval(result):"0";
    }

    /* Operators */
    let operators = [];
    props.operators.forEach((operator, index) => {
        operators.push(<option value={operator} key={index}>{operator}</option>)
    });

    /* Enable button */
    const [enable, setEnable] = useState('Disable');
    function toggleEnable(e) {
        setEnable(enable === "Disable" ? "Enable" : "Disable");
        let selectedInput = e.target.parentNode.childNodes[1];
        selectedInput.disabled = !selectedInput.disabled;
        calculate();
    }

    return (
        <div className="row column-gap-3 justify-content-center my-2">
            <select className="col-1 rounded-4" onClick={() => calculate()}>
                {operators}
            </select>
            <input placeholder="Add a number" type="number" className="input-number col-8 rounded-4 border-0 shadow" onInput={() => calculate()} />
            <button
                className="btn btn-danger col-1 rounded-4"
                onClick={(e) => {
                    let element = e.target.parentNode;
                    element.parentNode.removeChild(element);
                    calculate();
                }}>Delete</button>
            <button className="btn btn-secondary col-1 rounded-4" onClick={(e) => toggleEnable(e)}>{enable}</button>
        </div>
    )
}