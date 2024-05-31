import React, { useState } from 'react'


let [activeUser,setActiveUser] = useState(<button> step 1</button>);

let count=(steps)=>{
    setCuurrentStep(steps);
}
let set=() => {
    setActiveUser(activeUser +1)

}

export default function StepsCount() {
  return (
    <div>
    <div>StepsCount</div>
    <span>
    <h3>
        User 1 
        <button onClick = {count(1)}> step 1</button>
        <button onClick = {count(2)}> step 2</button>
        <button onClick = {count(3)}> step 3</button>
        <button onClick = {count(4)}> step 4 </button>
    </h3>
    </span>
     <button onC> Click me!</button>
    </div>


  )
}
