for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

for (let i = 5; i >= 1; i--) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

    for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= 5 - i; j++) {
        stars += " ";
    }

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= 5 - i; j++) {
        stars += " ";
    }

    for (let j = 1; j <= 2 * i - 1 ; j++) {
        stars += "*";
    }

    console.log(stars);
}
for (let i = 4; i >= 1; i--) {

    let stars = "";

    for (let j = 1; j <= 5 - i; j++) {
        stars += " ";
    }

    for (let j = 1; j <= 2 * i - 1 ; j++) {
        stars += "*";
    }

    console.log(stars);
}

//Hourglass

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}

for (let i = 2; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}
