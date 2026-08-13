let s = 15;
while (s >= 15 && s <= 20) {
    console.log(s);
    ++s;
}

let q=5;
while (q <= 10) {
    console.log(q);
    ++q;
}

let p = 10;
do {
    console.log(p);
    ++p;
} while (p <= 15);


let i = 1;
do {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
} while (i <= 10);

let r = 18;
do {
    console.log(r);
    ++r;
} while (r >= 15 && r <= 20);

let scope = "scope";
    console.log(scope)
function  name1(){
    console.log(scope);
}
name1()

function scop(){
    let name = "Hasan";
    console.log(name);
}
scop()
//console.log(name);

{
    let name = "Hasan";
    const age = 20;

    console.log(name); 
    console.log(age);  
}

//console.log(name); 
//console.log(age);  
