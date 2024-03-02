import React, { useState } from 'react'
import Square from './Square'

export default function Board() {
    const[state , setstate] = useState(Array(9).fill(null))
    const[isXture , setXturn] = useState(true)

    const handleclick = (index)=>{

        if(state[index] === null){

        const copystate = [...state]
        copystate[index] = isXture ? 'X' : 'O'
        setXturn(!isXture);
        setstate(copystate);
        }
    }

    const checkWinner = () =>{
        const winnerlogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let num of winnerlogic){
            const[a,b,c] = num
            if(state[a]!=null && state[a]===state[b] && state[b]===state[c]){
                return state[a];
            }
        }
        return false;
    }
    const winneris = checkWinner();

    if(state[0]!=null && state[1]!=null && state[2]!=null && state[3]!=null && state[4]!=null && state[5]!=null && state[6]!=null && state[7]!=null && state[8]!=null ){ 
        setstate(Array(9).fill(null))
    }
    
    const replay = () =>{
        setstate(Array(9).fill(null))
    }

  return (
    winneris ?
    <><h2>{winneris} wins the game </h2><button onClick={replay}>Replay!</button></>:
    <>
    <h3>Player '{isXture?'X':'O'}' your turn....</h3>
    <div className='board-container'>
        <div className='row-container'>
            <Square onClick={() =>handleclick(0)} value={state[0]}/>
            <Square onClick={() =>handleclick(1)} value={state[1]}/>
            <Square onClick={() =>handleclick(2)} value={state[2]}/>
        </div>
        <div className='row-container'>
            <Square onClick={() =>handleclick(3)} value={state[3]}/>
            <Square onClick={() =>handleclick(4)} value={state[4]}/>
            <Square onClick={() =>handleclick(5)} value={state[5]}/>
        </div>
        <div className='row-container'>
            <Square onClick={() =>handleclick(6)} value={state[6]}/>
            <Square onClick={() =>handleclick(7)} value={state[7]}/>
            <Square onClick={() =>handleclick(8)} value={state[8]}/>
        </div>
    </div>
    </>
  )
}
