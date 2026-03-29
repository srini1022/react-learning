


function Messagebox(props) {
   // let styles={backgroundColor: "lightblue", padding: "10px", borderRadius: "5px",color: props.textcolor};
    return <h1 style={{color: props.textcolor}}>Welcome!! {props.name}  </h1>
    // return(
    //     // <div className="Messagebox" style={styles}>
    //     //     <h1>Welcoome!!</h1>
    //     //     <h2>{props.name}</h2>
    //     // </div>  

    // )
}


export default Messagebox;