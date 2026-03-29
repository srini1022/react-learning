



import "./Product.css";


// it cn be aslo passed as individual props like this:
// function Product({title, price}){}
// default parameters also passes example
// fucntion Product({title = "Product title", price = 0}){}
// the array can be declared with html tags with in arr=[<li>"vfv"</li>, <li>"vfv"</li>] and can be passed as props and can be rendered with map function in the child component
//it can be rendered with map function in the child component like this:
// <ul>
//     {props.features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//     ))}
// </ul>
//the array it can be passed as props like this:
// <Product title="Phone" price={500} features={["I am small in size","I am light weight","I am very useful"]} />


    //based on price we can add discount it is achieved in many methdods like this:
    // let discount = 0;
    // if(props.price > 500){
    //     discount = props.price * 0.1;
    // }
    // const discountedPrice = props.price - discount;
    //or 
    //if(props.prce>k){
    //     return <p>Discounted Price: ${props.price * 0.9}</p>
    // }

    //or it cn be done using ternary operator like this:
    // const discountedPrice = props.price > 500 ? props.price * 0.9 : props.price;
    // return <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>

    // we can also use conditional rendering to display different content based on the price like this:
    // return (
    //     <div className="Product">
    //         <h3>{props.title}</h3>
    //         <h5>Price: ${props.price.toFixed(2)}</h5>
    //         <p>PRoduct Descrption: {props.features}</p>
    //         {props.price > 500 ? (
    //             <p>Discounted Price: ${props.price * 0.9}</p>
    //         ) : (
    //             <p>No Discount</p>
    //         )}
    //     </div>
    // );   
    //this doesnot add extra content to the dom it just conditionally renders the content based on the price.
    //for multi conditoons we can use && operator like this:
    // return (
    //     <div className="Product">
    //         <h3>{props.title}</h3>
    //         <h5>Price: ${props.price.toFixed(2)}</h5>
    //         <p>PRoduct Descrption: {props.features}</p>
    //         {props.price > 500 && <p>Discounted Price: ${props.price * 0.9}</p>}
    //         {props.price <= 500 && <p>No Discount</p>}
    //     </div>
    // );

    // and or operator can also be used for conditional rendering like this:
    // return (
    //     <div className="Product">
    //         <h3>{props.title}</h3>
    //         <h5>Price: ${props.price.toFixed(2)}</h5>
    //         <p>PRoduct Descrption: {props.features}</p>
    //         {props.price > 500 ? (
    //             <p>Discounted Price: ${props.price * 0.9}</p>
    //         ) : (
    //             <p>No Discount</p>
    //         )}
    //     </div>
    // );   


function Product(props){
    console.log(props);
    let styles={backgroundColor: props.price>500?"lightblue":"", padding: "10px", borderRadius: "5px"};
    return (
        <div className="Product" style={(styles)}>
            <h3>{props.title}</h3>
            <h5>Price: ${props.price.toFixed(2)}</h5>
            <p>PRoduct Descrption: {props.features}</p>
            {props.price > 500 ? (
                <p>Discounted Price: ${props.price * 0.9}</p>
            ) : (
                <p>No Discount</p>
            )
            }
        </div>
    )
}

//props are used to pass data from parent component to child componnt. props are read only and cannot be modified by the child component. props are passed as an object to the child component.
// example of props:

//props={
//     title: "Product title",
//     description: "Product description"
// }
// function Product(props){
//     return (
//         <div className="Product">
//             <h3>{props.title}</h3>
//             <h5>{props.description}</h5>
//         </div>
//     )
// }

export default Product;