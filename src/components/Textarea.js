
import React, { useState } from 'react'

export default function Textarea(props) {
    const onUpClick = () => {
        setText(text.toUpperCase())
    }
    const onlwClick = () => {
        setText(text.toLowerCase())
    }
    const onWsClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    const onClClick = () => {
        setText("")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter your text here")

    let myStyle = {
        backgroundColor:'white'
    }
    if(props.mode==='primary'){
        myStyle.backgroundColor='white'
    }else{
        myStyle.backgroundColor='#3c3637'
    }
    

    return (
        <>
            <form className='container'>
                <h3>{props.title}</h3>
                <div className="mb-3">
                    <textarea className='form-control text-secondary' value={text} onChange={handleOnChange}  style={myStyle} id="myBox" rows={8}></textarea>
                </div>
                <div className='d-flex gap-3'>
                    <button type='button' className="btn btn-primary" onClick={onUpClick}>Change to uppercase</button>
                    <button type='button' className="btn btn-danger" onClick={onlwClick}>Change to lowercase</button>
                    <button type='button' className="btn btn-success" onClick={onWsClick}>Remove wide-spaces</button>
                    <button type='button' className="btn btn-primary" onClick={onClClick}>Clear</button>
                </div>
            </form>
            <div className='container'>
                <h2>Your Text summery</h2>
                <p>{text.split(" ").length} Words and {text.length} characters.</p>
            </div>

        </>

    )
}
