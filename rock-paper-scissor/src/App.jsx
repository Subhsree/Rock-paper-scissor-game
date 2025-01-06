import React, { useState } from 'react';
import logo from './assets/logo.svg';
import Button from './components/Button';
import Choicebutton from './components/Choicebutton';

function App() {
  const [score,setScore] = useState(0);
  const [userchoice,setUserChoice] =useState('');
  const [housechoice,setHouseChoice] = useState('');
  
  return (
    <div className="outerdiv h-screen w-screen pt-10">
        <div className="border-4 headeroutline rounded-xl flex justify-between w-[50%] h-auto m-auto px-6 py-4">
          <div><img src={logo} alt="" /></div>
          <div className="bg-white h-auto py-2 px-8 rounded-md">
            <p className='text-score-text font-bold'>SCORE</p>
            <p className="text-dark-text text-5xl font-bold">{score}</p>
          </div>
        </div>
        <Choicebutton/>
        <div className='flex justify-end w-full  absolute bottom-10 right-10 '>
          <Button />
        </div>
    </div>
  )
}

export default App