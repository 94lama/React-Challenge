/* function calculate(){
    let inputs = document.getElementsByClassName("input-number");
        let result = "";
        Object.values(inputs).forEach(element=>{
            let operator = element.parentNode.childNodes[0].selectedOptions[0].innerText;
            if(element.value && !element.disabled){
                result += operator;
                result += element.value;
            }
        })
        let resultText = document.getElementById('result');
        resultText.innerText =eval(result)? eval(result):0;
}

export default function Input(position, operators) {
    let area = document.getElementById(position);

    // Radio button for operation picker
    let checkboxContainer = document.createElement('select');
    checkboxContainer.classList.add('col-1');

    operators.forEach((operator) => {
        let option = document.createElement('option');
        option.id = `${operator}Input`;
        option.innerText=operator;
        option.value=operator;
        checkboxContainer.appendChild(option);
        checkboxContainer.onclick=() => calculate();
    });

    // Input
    let input = document.createElement('input');
    input.placeholder = "Add a number";
    input.type = "number";
    input.classList.add("input-number", 'col-6')
    input.oninput= () => calculate();

    // Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'col-1');
    deleteBtn.innerText='Delete';
    deleteBtn.onclick=(e)=>{
        let inputNumber = e.target.parentNode;
        inputNumber.parentNode.removeChild(inputNumber);
        calculate();
    }

    // Enable/disable button
    let enableButton = document.createElement('button');
    enableButton.classList.add('btn', 'btn-secondary', 'col-1');
    enableButton.innerText = "Disable";
    enableButton.onclick=(e)=>{
        let inputComponent = e.target;
        inputComponent.innerText = inputComponent.innerText==='Disable'?"Enable":"Disable";
        inputComponent.parentNode.childNodes[1].disabled = !inputComponent.parentNode.childNodes[1].disabled;
        calculate();
    }

    // Operator component
    let container = document.createElement('div');
    container.classList.add('row', 'py-2', 'column-gap-3', 'justify-content-center');
    container.appendChild(checkboxContainer);
    container.appendChild(input);
    container.appendChild(deleteBtn);
    container.appendChild(enableButton);

    area.appendChild(container);
} */