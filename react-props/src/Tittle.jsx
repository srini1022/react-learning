


function Tittle(){
  return (
    <div>
      <h1>I am the title</h1>
    </div>
  );
}


function sum(a, b){
  return a + b;
}

export default Tittle;//exports only the Tittle component, not the whole file.
//this exports only one function or component at a time, and it is the default export of the file.

// name export is also possible, but it is not used in this case. It allows you to export multiple functions or components from the same file, and you can import them using their names.
// export {Tittle,sum};//exports both the Tittle component and the sum function, but they are not the default export of the file.



