

function generateRandomTicket(n) {
    let ticket = [];
    for(let i=0; i<n; i++){
        ticket.push(Math.floor(Math.random() * 10));
    }
    return ticket;
}

function sum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}   



export { generateRandomTicket, sum }