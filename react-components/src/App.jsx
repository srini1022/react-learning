import "./App.css";
import Tittle from "./Tittle.jsx";
import ProductTab from "./Producttab.jsx";


//import {Tittle,sum} from "./Tittle.jsx";//imports both the Tittle component and the sum function, but they are not the default export of the file.

let name = "John Doe";
function Paragraph(){
  return (
    <>
    <p>Hello My name is {name}</p>
    <p>I am going to teach you  2 tables</p>
    {[...Array(10)].map((_, i) => (
      <p key={i}>2 x {i + 1} = {2*(i + 1)}</p>
    ))}

    </>

  );
}
//THe curly braces {} are used to embed JavaScript expressions in JSX. In this case, we are using the map function to create an array of 10 elements, and for each element, we are creating a paragraph that displays the multiplication table of 2. The key prop is used to give each element a unique identifier, which is important for performance reasons when rendering lists in React.

function APP(){
  return (
    <>
      <Tittle />
      <ProductTab/>

      {/* <Tittle />
      <Tittle/>
      <Tittle/>
      <Paragraph />
      <button>Hello World</button> */}
    </>
  );
}





export default APP;

