import { useState } from "react";
import InputValue from "./InputValue";
import ListOperator from "./ListOperator";
import InputButton from "./InputButton";

export default function InputArea(props) {
    const symbols = ['+', '-'];

    /* function calculateResult (){
        let total = 0;
        let inputs = document.getElementsByClassName("input-number");
        Object.values(inputs).forEach(number => {
            if(number.disabled){return null}
            const value = Number(number.value);
            let symbol = number.parentNode.childNodes[0].selectedOptions[0].value;
            total = symbol===symbols[0]?total+value:
            symbol===symbols[1]?total-value:0;
        });
        // result(total);
    } */

    /* Delete button */
    const deleteInput = (e) => {
        let element = e.target.parentNode;
        element.parentNode.removeChild(element);
        props.calculate();
    }

    /* Enable button */
    const [enable, setEnable] = useState('Disable');
    const toggleEnable = (e) => {
        setEnable(enable === "Disable" ? "Enable" : "Disable");
        let selectedInput = e.target.parentNode.childNodes[1];
        selectedInput.disabled = !selectedInput.disabled;
        props.calculate();
    };

    return (
        <div className="row column-gap-3 justify-content-center my-2">
            <ListOperator clickFunction={props.calculate} symbols={symbols} />
            <InputValue calculateResult={props.calculate} />
            <InputButton value={"Delete"} clickFunction={deleteInput} class={"btn col rounded-5 btn-danger"} />
            <InputButton value={enable} clickFunction={toggleEnable} class={"btn col rounded-5 btn-primary"} />
        </div>
    )
}