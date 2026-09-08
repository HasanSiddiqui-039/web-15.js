let choice = 10;

switch (choice) {
    case 10:

        for (let i = 1; i <= 5; i++) {
            let row = "";

            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }

            for (let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            }

            console.log(row);
        }

        for (let i = 4; i >= 1; i--) {
            let row = "";

            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }

            for (let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            }

            console.log(row);
        }

        break;

    default:
        console.log("Invalid");
}

let choice = Number(prompt("1 se 5 tak number enter karein:"));

switch (choice) {

    case 1:
        // Square
        for (let i = 1; i <= 5; i++) {
            let row = "";

            for (let j = 1; j <= 5; j++) {
                row += "* ";
            }

            console.log(row);
        }
        break;


    case 2:
        // Triangle
        for (let i = 1; i <= 5; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += "* ";
            }

            console.log(row);
        }
        break;


    case 3:
        // Reverse Triangle
        for (let i = 5; i >= 1; i--) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += "* ";
            }

            console.log(row);
        }
        break;


    case 4:
        // Pyramid
        for (let i = 1; i <= 5; i++) {
            let row = "";

            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }

            for (let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            }

            console.log(row);
        }
        break;


    case 5:
        // Diamond
        for (let i = 1; i <= 5; i++) {
            let row = "";

            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }

            for (let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            }

            console.log(row);
        }

        for (let i = 4; i >= 1; i--) {
            let row = "";

            for (let j = 1; j <= 5 - i; j++) {
                row += " ";
            }

            for (let j = 1; j <= 2 * i - 1; j++) {
                row += "*";
            }

            console.log(row);
        }
        break;


    default:
        console.log("Please enter number 1 to 5");
}
