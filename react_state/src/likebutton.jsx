import { useState } from "react";



export default function LikeButton(){

    let [like,setLike] = useState(false);//hooks can only be created inside a function or a component only
    let [count,setCount] = useState(0);

// useState is a hook which is used to create a state variable and a function to update that variable. It takes an initial value as an argument and returns an array with two elements: the current state value and the function to update it.
// like is the state variable which holds the current value of the like button (true or false) and setLike is the function to update the like variable. Similarly, count is the state variable which holds the number of clicks and setCount is the function to update the count variable.

// console.log(like);
// console.log(count);

// console.log("Component rendered");
// closure is a feature in JavaScript where an inner function has access to the outer function's variables and parameters even after the outer function has returned. In this case, the toggle function is an inner function that has access to the like and count variables from the outer component function. This allows us to update the state variables when the toggle function is called, even though it is defined inside the component function.
// When the toggle function is called, it creates a new value for like by negating the current value of like (using !like). It then updates the like state variable with this new value using setLike. It also increments the count state variable by 1 using setCount(count + 1). This causes the component to re-render with the updated state values, which in turn updates the UI to reflect the new like status and click count.

// closure is a feature in js where an inner function has access to the outer(enclosing) function's variables and parameters even after the outer function has returned. In this case, the toggle function is an inner function that has access to the like and count variables from the outer component function. This allows us to update the state variables when the toggle function is called, even though it is defined inside the component function
    //fuctions varaibes
// example of closure
// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// let fn=outer();
// fn(); //1
// fn(); //2
// fn(); //3

// in js once a fucntion completes its execution any variables that were defined inside he function scope cease t exist
// but in closure the inner function can still access those variables even after the outer function has completed its execution. This is because the inner function maintains a reference to the variables of the outer function, allowing it to access and manipulate them as needed. In the example above, the inner function has access to the count variable defined in the outer function, allowing it to increment and log the count value each time it is called, even after the outer function has finished executing.





    let toggle =()=>{
        // console.log("Liked");
        let newval=!like;
        setLike(newval);
        setCount(count+1);
    }

    let likestyle={
        color:"red"
    }
    return (
        <div>
            <p onClick={toggle}>
                {/* {like.toString() } */}
                <div>Clicks = {count} </div>
                {like?(
                    <i className="fa-solid fa-heart" style={likestyle}></i>
                ):(
                    <i className="fa-solid fa-heart"></i>   
                )}
               {/* <i className="fa-solid fa-heart"></i> */}
            </p>
        </div>
    )
}