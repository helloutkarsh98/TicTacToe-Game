import React,{useState} from 'react'

export default function TextArea(props) {
    const handleUpclick= ()=>{
        console.log('You clicked handle UP click');
        let newtext=text.toUpperCase()
        setText(newtext);
    }
    const handleLoclick= ()=>{
        console.log('You clicked handle Lower click');
        let newtext=text.toLowerCase()
        setText(newtext);
    }
    const handlechange=(event) =>{
        console.log('on change')
        setText(event.target.value)
    }
    // const handleCapitalize= () =>{
    //     console.log('utkatsh')
    //     for(let i of text){
    //         if(text[i]===' ' && text[i+1] != ' '){
    //             if(text[i+1] >= 'a' && text[i+1] <= 'z')
    //                 text[i+1] = text[i+1] - 'a' + 'A' //for lower case
    //         }
    //     }
    // }
    const[text, setText]=useState('How are you?')
  
  return (
    <div>
        <h1>{props.heading}</h1>
            <textarea className="form-control" id="text" value={text} rows="10"onChange={handlechange} ></textarea>
            <button onClick={handleUpclick}>Upper Case</button>
            <button onClick={handleLoclick}>Lower Case</button>
            {/* <button onClick={handleCapitalize}>Capitalize First word</button> */}
    </div>
  )
}
