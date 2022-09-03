import './App.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 const [val,setval]=useState("")

 const btnClick =(e)=>{
   setval(val.concat(e.target.value))
 } 
 
 const clear=()=>{
   setval("")
 }

 const back=()=>{
  setval(val.slice(0,-1))
 }

 const cal=()=>{
   setval (eval(val))
 }



  return (
    <>
     <Container>
       <input type="text" className='cal' value={val}/>
       
       <br/><br/><br/>
      <button value="1" onClick={btnClick}>1</button>
      <button value="2" onClick={btnClick}>2</button>
      <button value="3" onClick={btnClick}>3</button>
      <br/><br/><br/>


      <button value="4" onClick={btnClick}>4</button>
      <button value="5" onClick={btnClick}>5</button>
      <button value="6" onClick={btnClick}>6</button>
      <br/><br/><br/>


      <button value="7" onClick={btnClick}>7</button>
      <button value="8" onClick={btnClick}>8</button>
      <button value="9" onClick={btnClick}>9</button>
      <br/><br/><br/>

      <button value="+" onClick={cale}>+</button>
      <button value="-" onClick={cale}>-</button>
      <button value="*" onClick={cale}>*</button>
      <button value="/" onClick={cale}>/</button>


      <br/><br/><br/>
      <button value="clear" onClick={clear}>Clear</button>
      <button value="back" onClick={back}>back</button>

      <button value="=" onClick={cal}>=</button>

     </Container>

    </>
  );
}

export default App;
