import SymbolOption from "./SymbolOption";

export default function ListOperator(props) {
    let operators = [];
    props.symbols.forEach((symbol, index) => {
        operators.push(<SymbolOption key={index} symbol={symbol} />);
    });

    return (
        <select className="col rounded-5" onClick={props.clickFunction}>
            {operators}
        </select>
    );
}