import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";


function App() {
  const [mode, setMode]=useState('primary')
  const toggleMode=()=>{
    if(mode === 'primary'){
      setMode('dark')
      document.body.style.backgroundColor='#242121';
      document.body.style.color='white';
    }else{
      setMode('primary')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Textarea title="Enter you text here for better analyze" mode={mode}/>
    </>
  );
}

export default App;
