

// state in react are State is a built-in object used to store data that can change over time and automatically update the UI.
//hooks are Hooks are special functions in React that let you use state and other features inside functional components.

// useState() is used 


import { useState } from "react";

export default function Counter() {
//here instead of zero a funtion can also be passsed
function inti(){
  console.log("init is executed")
  return Math.random();
}

    const [cunt, setCunt] = useState(inti );//intialsisng ine it is ignored when we re-render
  console.log("Component was re-rendered");

    // function innCount() {
    //     // setCunt(cunt + 1); it is asynchronous function 
    //     //setCunt(cunt+1); evev if two times are there when i press button it will increase one time only

    //     // hence we use callback 
    //     // callbacks are functions that are passed as arguments to other functions and are executed at a later time
    //     // setCunt((prevCount) => prevCount + 1);

    //     console.log(cunt+1);
    // }

    const innCount = () => {

      // uisng call back we are solving the asynchroous nature such that react uses latest value 
      setCunt((prevCount) =>{
        return prevCount + 1
        }
      );
      // setCunt((prevCount) =>{
      //   return  prevCount+1;
      // });

      // setCunt(25);

    };

  return (
    <>
      <h3> Count={cunt} </h3>  
       {/* //here it updates the value after re rendering  */}
      <button onClick={innCount}>Increment</button> 
    </>
  );

}

//re-render happens when value in the sate

