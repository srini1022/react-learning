import React, { useState } from "react";

export default function ArrayLudoBoard(){
    let [moves, setmoves] = useState({blue:0, red:0, yellow:0, green:0});
    let [arr,SetArr]=useState(["no moves"]);

    let updateBlue=()=>{
        setmoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue + 1}
        }); 
        // arr.push("blue moves");
        SetArr((prevArr)=>{

            return [...prevArr, "blue moves"];
        });
        console.log(arr);
    };
    




    let updateRed=()=>{

        setmoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red + 1}
        }); 
        SetArr((prevArr)=>{
            return [...prevArr, "red moves"];
        }); 
        console.log(arr);
    }   

    let updateYellow=()=>{    
            setmoves((prevMoves)=>{ 
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });

        SetArr((prevArr)=>{
            return [...prevArr, "Yellow moves"]
        }); 
        console.log(arr);
    }

    let updateGreen=()=>{
        setmoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green + 1}
        });
        SetArr((prevArr)=>{
            return [...prevArr, "Green moves"]
        }); 
        console.log(arr);
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