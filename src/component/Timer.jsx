import React, { useEffect, useState } from 'react'

export default function Timer() {
   const[time, settime]= useState(0);
    useEffect(()=>{
        const timer = setInterval(() => {settime(time+1)}, 1000);
        console.log('useeffect entered..')
        return function (){
          clearInterval(timer);
        }
    },[time])
    const toggletimer= () =>{
      clearInterval(time)
    }

  return (
    <div>
      <h1>Stop watch</h1>
      <p>Counter time is <span>{time}</span></p>
      <button onClick={toggletimer}>Pause timer</button>
    </div>
  )
}