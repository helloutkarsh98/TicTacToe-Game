import React ,{useState , useEffect} from 'react'

export default function Counter() {
    
    const [count, setcount] = useState(0);

    useEffect(() =>{
        console.log('component mounting..')
        return function (){
          console.log('returning form component mount state..')
        }
    }, [])

    useEffect(() =>{
        console.log('Inc. button clicked') 
        return function(){
          console.log('returning from count', count);
        }
    }, [count])

  return (
    <div>
      <h3>Counter is {count}</h3>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}

