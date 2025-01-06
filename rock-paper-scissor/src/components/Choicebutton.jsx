import React from 'react';
import Circle from './Circle'
export default function Choicebutton()
{
    return(
        <div className="sm:h-[50%] sm:w-[35%] m-auto trianglebackground mt-20 ">
            <div className="flex justify-between">
              <Circle path="icon-paper.svg" gradient="papergradient"/>
              <Circle path="icon-scissors.svg" gradient="scissorgradient"/>
            </div>
            <div className="flex justify-center">
              <Circle path="icon-rock.svg" gradient= "rockgradient"/>
            </div>
        </div>
    )
}