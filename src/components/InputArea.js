import { useState } from "react";
import InputValue from "./InputValue";
import ListOperator from "./ListOperator";
import InputButton from "./InputButton";

export default function InputArea(props) {
    const symbols = ['+', '-'];

    const calculateResult = () => {
        let inputs = document.getElementsByClassName("input-number");
        let result = 0;
        Object.values(inputs).forEach(element => {
            let symbol = element.parentNode.childNodes[0].selectedOptions[0].value;
            if (element.valueAsNumber && !element.disabled) {
                result += symbol;
                result += element.valueAsNumber;
            }
        })
        const resultText = document.getElementById("result");
        resultText.textContent = Number(eval(result)) ? eval(result) : "0";
    }

    /* Delete button */
    const deleteInput = (e) => {
        let element = e.target.parentNode;
        element.parentNode.removeChild(element);
        calculateResult();
    }

    /* Enable button */
    const [enable, setEnable] = useState('Disable');
    const toggleEnable = (e) => {
        setEnable(enable === "Disable" ? "Enable" : "Disable");
        let selectedInput = e.target.parentNode.childNodes[1];
        selectedInput.disabled = !selectedInput.disabled;
        calculateResult();
    };

    return (
        <div className="row column-gap-3 justify-content-center my-2">
            <ListOperator clickFunction={calculateResult} symbols={symbols} />
            <InputValue calculateResult={calculateResult} />
            <InputButton value={"Delete"} clickFunction={deleteInput} class={"btn col rounded-5 btn-danger"} />
            <InputButton value={enable} clickFunction={toggleEnable} class={"btn col rounded-5 btn-primary"} />
        </div>
    )
}