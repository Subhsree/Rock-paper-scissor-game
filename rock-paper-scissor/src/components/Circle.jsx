import React from 'react'

export default function Circle(props) {
  return (
    <div className={`h-52 w-52 rounded-full ${props.gradient} flex justify-center items-center`}>
        <div className="h-40 w-40 rounded-full bg-white ">
            <img src={props.path}/>
        </div>
    </div>
  )
}
