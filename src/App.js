import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Countdown from './Coundown';
import Tasks from "./Tasks";
import { Link } from "react-router-dom";





function App() {

  const changeColor = (a,b,c) => {
    setbackgroundColor(a)
    setsmallbackround(b)
    setSelectBackground(c)
   }
  

  

 

  const [backgroundColor, setbackgroundColor] = useState('bg-red-500');
  const [smallbackround, setsmallbackround] = useState('bg-red-400');
  const [selectBackground, setSelectBackground] = useState('');
  
  

  
  


  return (
    <div className = {`${backgroundColor} h-screen w-screen    `} >
      <div className=''><Header smallbackround={smallbackround}  backgroundColor= {backgroundColor}/></div>
      <div className=''><Countdown  backgroundColor= {backgroundColor} setbackgroundColor={setbackgroundColor} smallbackround={smallbackround} setsmallbackround={setsmallbackround} changeColor={changeColor} selectBackground={selectBackground} setSelectBackground={setSelectBackground}  /></div>
      <div><Tasks backgroundColor={backgroundColor}/></div>
    </div>
  );
}

export default App;
