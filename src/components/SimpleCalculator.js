import {useState} from "react";

export default function SimpleCalculator(props) {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [result, setResult] = useState(null)
    return (
        <table border={1}>
                <h2> {props.title}</h2>
                <input type="number" onChange={(event) => setInput1(event.target.value)}/>
                <br/>
                <input type="number" onChange={(event) => setInput2(event.target.value)}/>
                <br/>
                <button onClick={(event) => {
                    setResult(Number(input1) + Number(input2))
                }}>+
                </button>
                <button onClick={(event) => {
                    setResult(Number(input1) - Number(input2))
                }}>-
                </button>
                <button onClick={(event) => {
                    setResult(Number(input1) * Number(input2))
                }}>x
                </button>
                <button onClick={(event) => {
                    setResult(Number(input1) / Number(input2))
                }}>/
                </button>
                <br/>
                <p>Result: {result}</p>

        </table>
    )
}
