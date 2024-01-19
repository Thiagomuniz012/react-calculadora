import "./App.css";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [oldCurrentValue, setOldCurrentValue] = useState(0);
  const [operator, setOperator] = useState('');

  function inputNum(e) {
    const input = e.target.value;
    if(currentValue == 0){
      setCurrentValue(input)
    }else{
      setCurrentValue(currentValue + input)
    }
  }

  function handleACclick(){
    setCurrentValue(0)
    setOldCurrentValue(0);
    setOperator('');
  }

  function percentage() {
    const percent = currentValue / 100;
    setCurrentValue(percent.toFixed(2));
  }

  function replace(){
    setCurrentValue(currentValue * -1)
  }

  function equal() {
    if (operator === '') {
      return
    }

    const oldVal = parseFloat(oldCurrentValue);
    const currentVal = parseFloat(currentValue);

    if (operator === '/') {
      const result = oldVal / currentVal || 0;
      setCurrentValue(result);
    } else if (operator === '*') {
      const result = oldVal * currentVal || 0;
      setCurrentValue(result);
    } else if (operator === '+') {
      const result = oldVal + currentVal || 0;
      setCurrentValue(result);
    } else if (operator === '-') {
      const result = oldVal - currentVal || 0;
      setCurrentValue(result);
    }
    
    setOldCurrentValue(0);
    setOperator('');
  }

  function operatorCalc(e) {
    if (operator !== '') {
      equal();
    }
    setOperator(e.target.value);
    setOldCurrentValue(currentValue);
    setCurrentValue(0);
  }

  return (
    <>
      <div className="container">
        <div className="display">{currentValue}</div>
        <button className="AC gray-one" onClick={handleACclick}>AC</button>
        <button className="replace gray-one" onClick={replace}>±</button>
        <button className="percentage gray-one" onClick={percentage}>%</button>
        <button className="division orange" value={"/"} onClick={operatorCalc}>÷</button>
        <button className="seven" value={7} onClick={inputNum}>7</button>
        <button className="eight"value={8} onClick={inputNum}>8</button>
        <button className="nine" value={9} onClick={inputNum}>9</button>
        <button className="multiply orange" value={"*"} onClick={operatorCalc}>x</button>
        <button className="four" value={4} onClick={inputNum}>4</button>
        <button className="five" value={5} onClick={inputNum}>5</button>
        <button className="six" value={6} onClick={inputNum}>6</button>
        <button className="minus orange" value={"-"} onClick={operatorCalc}>-</button>
        <button className="one" value={1} onClick={inputNum}>1</button>
        <button className="two" value={2} onClick={inputNum}>2</button>
        <button className="three" value={3} onClick={inputNum}>3</button>
        <button className="plus orange" value={"+"} onClick={operatorCalc}>+</button>
        <button className="zero" value={0} onClick={inputNum}>0</button>
        <button className="point" value={"."} onClick={inputNum}>.</button>
        <button className="equal orange" onClick={equal}>=</button>
      </div>
    </>
  );
}

export default App;
