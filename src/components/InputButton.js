export default function InputButton(props){
    return(<button className={props.class} onClick={(e) => props.clickFunction(e)}>{props.value}</button>)
}