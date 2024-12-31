import React from "react";
import logo from './assets/logo.svg';
import Circle from "./components/Circle";

function App() {

  return (
    <div className="outerdiv h-screen w-screen pt-10">
        <div className="border-4 border-header-outline rounded-xl flex justify-between w-[50%] h-auto m-auto px-6 py-4">
          <div><img src={logo} alt="" /></div>
          <div className="bg-white h-auto py-2 px-8 rounded-md">
            <p className='text-score-text font-bold'>SCORE</p>
            <p className="text-dark-text text-5xl font-bold">12</p>
          </div>
        </div>
        <div className="h-[50%] w-[35%] m-auto trianglebackground mt-20">
            <div className="flex justify-between">
              <Circle path="icon-paper.svg" gradient="papergradient"/>
              <Circle path="icon-scissors.svg" gradient="scissorgradient"/>
            </div>
            <div className="flex justify-center">
              <Circle path="icon-rock.svg" gradient= "rockgradient"/>
            </div>
        </div>
    </div>
  )
}

export default App
