let country = "Pakistan"; // Global Scope

function info() {

    var name = "Hasan"; // Function Scope

    if (true) {

        let age = 20; // Block Scope

        console.log(country);
        console.log(name);
        console.log(age);

    }

    console.log(country);
    console.log(name);

    // console.log(age); // Error

}

info();

console.log(country);

// console.log(name); 
// console.log(age);  