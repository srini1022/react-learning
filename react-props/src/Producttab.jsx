
import Product from "./Product.jsx";

function ProductTab(){
    let features= ["I am small in size",
                    "I am light weight",
                         "I am very useful"];
    let featureobject={
        a:"I am small in size",
        b:"I am light weight",
        c:"I am very useful"
    };

    // if u pass an object as props it must be accessed as props.objectname.keyname
    // if array is passed as props it must be accessed as props.arrayname[index]
    // it can be initalised and passed directly as props like this:
    // <Product title="Phone" price={500} features={["I am small in size","I am light weight","I am very useful"]} />
    // IF AN array  is passed for featuring we can use map function to display all the features like this:
    // <ul>
    //     {props.features.map((feature, index) => (
    //         <li key={index}>{feature}</li>
    //     ))}
    // </ul>

    return (
        <div>
            <h2>Product Tab</h2>
            <Product title="Phone" price={500} features={features[0]} />
            
            <Product title="Laptop" price={1000} features={["Declared and initialised at jsx"]} />
            <Product title="Pen" price={10} features={featureobject.c} />
        </div>
    )
}

export default ProductTab;  