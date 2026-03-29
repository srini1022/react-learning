
// event handlers are functions that are called when an event occurs. In React, you can use event handlers to handle events such as clicks, mouse movements, and keyboard input.
// event object is passed as an argument to the event handler function. The event object contains information about the event, such as the target element and the type of event.
//example of event handler function that logs a message to the console when a button is clicked.
function handleClick(event) {
    console.log('Button was clicked!');
    console.log(event);
}




function printHello(){
    console.log('Hello');
}

function printBye(){
    console.log('Bye');
}



export default function Button() {
    return (
        <div>
        <button onClick={handleClick}>Click Me!!</button>
        {/* <p onClick={printBye }>Click the button to see the message in the console. </p> */}
       <p onMouseOver={printBye}>Hover the mouse over this text to see the message in the console. </p>
        <button onDoubleClick={printHello}>Double Click Me!!</button>
    
    
    </div>

    ); 
}   

