import React from 'react'

export default function Square(props) {
  return (
    <div onClick={props.onClick} className='square-box'>
      <h1>{props.value}</h1>
    </div>
  )
}
