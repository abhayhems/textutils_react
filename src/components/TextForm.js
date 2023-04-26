import { useState } from "react";
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");  
    const handleClick= ()=>{
        //console.log("to uppercase was clicked on "+text);
        if(text=="")
        {
          alert("write some text dudee!!");
        }
        let n=text.toUpperCase();
        setText(n);
        props.showAlert(" converted to uppercase","success");
    }
    const handleLc= ()=>{
      if(text=="")
      {
        alert("write some text dudee!!");
      }
      let c=text.toLowerCase();
      setText(c);
      props.showAlert(" converted to lowercase","success");
    }
    const handlecopy= ()=>{
      var t=document.getElementById('myBox');
      t.select();
      navigator.clipboard.writeText(t.value)
      props.showAlert(" text is copied","success");

    }
    const handleextraspaces= ()=>{
      var t=text.split(/[ ]+/);
      setText(t.join(" "));
      props.showAlert(" extraspaces have been removed","success");
    }
    const handleOnChange= (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const handleLclear= ()=>{
      
      setText("");
      props.showAlert(" text has been cleared","success");
    }
    
  return (
    <>
    <div className={`container text-${props.mode==='white'?'dark':'white'}`}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='white'?'dark':'white'}`} value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='white'?'white':'#0d124a'}} id="myBox" rows="8"></textarea>
        </div>
                <button className="btn btn-primary mx-1" onClick={handleClick} >clict to convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLc}>to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLclear}>clear text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleextraspaces}>remove extra space</button>
    </div>
    <div className={`container text-${props.mode==='white'?'dark':'white'}`} >
      <h3>Your text summary </h3>
      <p>{text.length>0?text.split(" ").length:0} words {text.length} characters </p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>preview</h3>
      <p>{text.length>0?text:'enter some text to preview it'}</p>
    </div>
    </>
  )
}
