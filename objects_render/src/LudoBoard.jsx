import { useState } from "react";




export default function LudoBoard(){

    // let [blueMoves, setBlueMoves] = useState(0);
    // let [redMoves, setRedMoves] = useState(0);
    // let [yellowMoves, setYellowMoves] = useState(0);
    // let [greenMoves, setGreenMoves] = useState(0);

    //instead of creating  so many states, we can create an object to store the moves of each player

    // for example we can create an object like this

    let [moves, setmoves] = useState({blue:0, red:0, yellow:0, green:0});


    let updateBlue=()=>{
        //moves.blue+=1;//we can directly update the value of blue moves in the moves object, but we cannot directly update the state variable, we have to use the setmoves function to update the state variable, because the state variable is immutable and we cannot directly update it, we have to use the setmoves function to update it, and we have to pass the entire object with updated value of blue moves and other values of red, yellow and green moves, because setmoves function will replace the entire object with the new object we are passing, so we have to pass the entire object with updated value of blue moves and other values of red, yellow and green moves. we can use spread operator to create a new object with updated value of blue moves and other values of red, yellow and green moves.
        //like this we can update the value of blue moves in the moves object and then we can pass the entire object with updated value of blue moves and other values of red, yellow and green moves to the setmoves function to update the state variable and re-render the component with updated value of blue moves and other values of red, yellow and green moves.

        console.log(`Blue moves = ${moves.blue}`);
        // setmoves({...moves, blue: moves.blue + 1});

        setmoves((prevMoves)=>{
            return {...prevMoves, blue: Math.floor(Math.random() * 6) + 1}
        }); 
        // 
        //we have to pass entire object to setmoves function, we cannot pass only the updated value of blue moves, because it will overwrite the entire object and we will lose the values of other players moves. so we have to pass the entire object with updated value of blue moves. we can use spread operator to create a new object with updated value of blue moves and other values of red, yellow and green moves.
        //because setmoves function will replace the entire object with the new object we are passing, so we have to pass the entire object with updated value of blue moves and other values of red, yellow and green moves. we can use spread operator to create a new object with updated value of blue moves and other values of red, yellow and green moves.
        //object doesnot change the address in memory, so we have to create a new object with updated value of blue moves and other values of red, yellow and green moves, so that the address in memory will change and the component will re-render with updated value of blue moves and other values of red, yellow and green moves.
        //same with arrays, if we want to update an array, we have to create a new array with updated value and other values of the array, so that the address in memory will change and the component will re-render with updated value of the array and other values of the array.    

    }

    function updateRed(){
        setmoves((prevMoves)=>{
            return {...prevMoves, red:Math.floor(Math.random() * 6) + 1}
        }); 
    }   

    function updateYellow(){    
        setmoves((prevMoves)=>{
            return {...prevMoves, yellow:Math.floor(Math.random() * 6) + 1}
        }); 
    }

    function updateGreen(){
        setmoves((prevMoves)=>{
            return {...prevMoves, green: Math.floor(Math.random() * 6) + 1}
        }); 
    }   

    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{margin:'5px',backgroudColor:"blue"}} onClick={updateBlue}>RollOn!!</button>
                <p>Red moves = {moves.red}</p>
                <button style={{margin:'5px',backgroundColor:"red"}} onClick={updateRed}>RollOn!!</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{margin:'5px',backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>RollOn!!</button>
                <p>Green moves = {moves.green}</p>
                <button style={{margin:'5px',backgroundColor:"green"}} onClick={updateGreen}>RollOn!!</button>
            </div>
        </div>
    )
}