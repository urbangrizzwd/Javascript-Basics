var message = "This Website are for those that like to travel the world";
console.log(message);
var destination = prompt("What is your travel destination?", "Destination");
var txt;
if (destination == null || destination == "") {
    txt = "user cancled the prompt";
} else {
    txt = "Great, pack your bags your going to " + destination;
    document.getElementById("destination").innerHTML = txt;
}

let ticketOne = 200;
let ticketTwo = 300;
let ticketSum = ticketOne + ticketTwo;
console.log(ticketOne + ticketTwo);
txt = "Great, your Tickets to " + destination + " are $" + ticketSum;
document.getElementById("demo").innerHTML = txt;

function buttonFunction() {
    document.write("Great Your tickets have been ordered.");
} 