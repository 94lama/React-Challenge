export default function InputValue(props){
    return(
        <input placeholder="Add a number" type="number" className="input-number col-7 rounded-5 border-0 shadow" onInput={props.calculateResult} />
    )
}