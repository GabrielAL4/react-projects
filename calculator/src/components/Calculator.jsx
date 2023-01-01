import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';
export default function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState();

    function inputNumber(e){
        if(number === 0){
            setNumber(e.target.value);
        }else setNumber(number + e.target.value);
        
    }

    function allClear(){
        setNumber(0);
    }

    function porcentage(){
        setNumber(number/100);
    }

    function changeSign(){
        if(number > 0) setNumber(-number);
        else setNumber(Math.abs(number));
    }

    function operationHandler(e){
        setOperator(e.target.value);
        setOldNumber(number);
        setNumber(0);
    }

    function calculate(){
        if(operator==="/") setNumber(oldNumber / number);
        else if(operator==="X") setNumber(oldNumber * number);
        else if(operator==="-") setNumber(oldNumber - number);
        else if(operator==="+") setNumber(parseFloat(oldNumber) + parseFloat(number));
    }
    return (
        <div>
            <Box m={7}/>
                <Container maxWidth="xs">
                    <div className='wrapper'>
                        <h1 className='oldResult'>{oldNumber}</h1>
                        <h1 className='result'>{number}</h1>
                        <button onClick={allClear}>AC</button>
                        <button onClick={changeSign}>+/-</button>
                        <button onClick={porcentage}>%</button>
                        <button className='orange' onClick={operationHandler} value="/">/</button>
                        <button className='gray' onClick={inputNumber} value = {7}>7</button>
                        <button className='gray' onClick={inputNumber} value = {8}>8</button>
                        <button className='gray' onClick={inputNumber} value = {9}>9</button>
                        <button className='orange' onClick={operationHandler} value="X">X</button>
                        <button className='gray' onClick={inputNumber} value = {4}>4</button>
                        <button className='gray' onClick={inputNumber} value = {5}>5</button>
                        <button className='gray' onClick={inputNumber} value = {6}>6</button>                  
                        <button className='orange' onClick={operationHandler} value="-">-</button>
                        <button className='gray' onClick={inputNumber} value = {1}>1</button>
                        <button className='gray' onClick={inputNumber} value = {2}>2</button>
                        <button className='gray' onClick={inputNumber} value = {3}>3</button>
                        <button className='orange' onClick={operationHandler} value="+">+</button>
                        <button className='gray' onClick={inputNumber} value = {0}>0</button>
                        <button className='gray' onClick={inputNumber} value = {"."}>.</button>
                        <button className='gray' style={{visibility: "hidden"}}>,</button>
                        <button className='orange' onClick={calculate}>=</button>
                    </div>
                </Container>
        </div>
    )
}