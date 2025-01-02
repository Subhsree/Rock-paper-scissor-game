import React from 'react'

export default function Circle(props) {
  return (
    <div className={`h-48 w-48 rounded-full ${props.gradient} flex justify-center items-center`}>
        <div className="h-36 w-36 rounded-full bg-white flex justify-center items-center">
            <img src={props.path} width="70" height="70"/>
        </div>
    </div>
  )
}
