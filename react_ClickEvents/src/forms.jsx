
function handleFormSubmit(event){
     event.preventDefault(); // prevents the default form submission behavior
    console.log('Form submitted');
}

export default function Forms() {
    return (
        <form>
            <input type="text" placeholder="Enter your name" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}
