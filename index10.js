switch ek decision-making statement hai.
Jab humein kisi ek value ke basis par multiple options mein se ek option select karna ho, to switch use kar sakte hain.

Switch statement JavaScript mein ek value ko multiple cases ke saath compare karne ke liye use hota hai. Jo case value se match ho jaye, uska code run hota hai.

    
let num1 = Number(prompt("Enter number 1:"));
let num2 = Number(prompt("Enter number 2:"));
let operator = prompt("Enter operator (+, -, *, /):");
switch(operator) {

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid operator");
}


let day = Number(prompt("Enter day number:"));
switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
}


let num = 1;
switch(num) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");

    case 3:
        console.log("Three");
}


let color = prompt("Enter traffic light color:");
switch(color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}
