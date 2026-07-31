// declarations and initialiation


// declare 
// let myName;

// initialize
// let myNames  = "jhon dee";

// const b = 12;
// let a  = 12;
// console.log(a)

// scope (global,block, function)NN
// var  ko  function ke  bhair use  nhi kartey hau  
// let ko  curly barket ke bahir use  nhi kar saktey hai

// gloabl scope (is ko  pure code mai  accese kar sakte hai)
// global  function wo  function hutey hai  ju driectly   variable  bana akr use kr skte hai or  is ko  har  function mai use kar skte hai 
// asa  variable ju  kisi  barket  ke  ander nhi hu   us ko global scope function boltey hai 
//  var a = "ahad";  

// block scope (is ko srif curly bracket ke ander accese kar sakte hai)
// block scope  wo hota hai  jab hum kisi  variable ko  curly bracket ke ander declare karte hai  to wo variable sirf usi curly bracket ke ander use ho sakta hai 
// {
//     var a = "ahad";
// }

// function scope (is ko function ke ander use kar sakte hai)
// function scope  wo hota hai  jab hum kisi variable ko function ke ander declare karte hai to wo variable sirf usi function ke ander use ho sakta hai
// fuuction scope  mai  var ka use nhi kar haiu  is ko  kyu use nhi  kar tey hai ky q ye function ko  resquest nhi detha hai
// function abcd(){
//     if(ture){
//         let a = "ahad"
//     }
// }


// Reassingment (ek bar value assign karne ke baad usko change karna)
// reassignmnet  wo hota hai  jab hum kisi variable ko ek bar value assign karne ke baad usko change karte hai 
// let a = 12;
// a = 13;
// console.log(a)

// redeclaration (ek bar variable declare karne ke baad usko dubara declare karna) let not use redeclaration  var use redeclaration
// redeclaration  wo hota hai  jab hum kisi variable ko ek bar declare karne ke baad usko dubara declare karte hai 
// var a = 12;
// var a = 13;
// console.log(a)


// let a = 12;
//  a = 13;
//  console.log(a)

// temporal dead zone (TDZ) (let aur const ke sath hota hai ) 

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 12;
// console.log(a);
// a = 12; 

// or var mai  tamporal dead zone hu tha hai, let mai  temporl dead zone  nhi hu tha hai k
// hoisting (var ke sath hota hai)
// console.log(a); // undefined

//  let  x = 1;

// {
//     let x = 3;
//     console.log(x);

// }

// console.log(x)

// Data Types
// primitive  mai  breket nhi hu tey hai(primitive mai  value ki copy  karney pr un ki asal  copy  mil ti hai)
// refrence mai   barket atey haik

// Primitive → VALUE copy hoti hai
// string ,number , boolean , null ,undefined , ture, bigint ,symbol

// Reference → ADDRESS copy hota hai
// function ,array, object

// Reference
// let  a = [1,2,3 ];
//  let  b = a; 

//  b.push(4)
// primitive
//  stiring structure
// "" double qoute
// '' sigal qoute
// `` backtick

//  let a = 'ahad';(string)
//  console.log(a)

// let a = `ahad`;
// console.log(a)

// dynamic typing  (dynamic typing mai  data ka  chanege kar sakht tey hu)
//  for example
//  let a = "ahad"
//   a = 12;
//   a = [1,2,3]
//   console.log(a.typeof)

// STACK (Primitive)               STACK (Reference variable) → HEAP (Actual Object/Array)
// ─────────────────               ──────────────────────────────────────────────
// a → 10                           obj1 → 5001
// b → 10                           arr1 → 5002
// c → true                          func1 → 5003

// // Primitive Example
// let a = 10
// let b = a
// b = 20
// // Stack me:
// a → 10   (unchanged)
// b → 20   (new copy)

// // Reference Example
// let obj1 = { name: "Ahad" }
// let obj2 = obj1
// obj2.name = "Ali"
// // Memory:
// obj1 → 5001 ──► { name: "Ali" }
// obj2 → 5001 ──┘ (same object, change reflects in both)

// // Array Example
// let arr1 = [1,2,3]
// typeof arr1            // "object"   typeof quirk
// Array.isArray(arr1)    // true correct

// // Null Example
// let n = null
// typeof n               // "object"  historic bug

// // Function Example
// function foo() {}
// typeof foo             // "function" 

// 1. Variable Declarations & Initialization

// Declaration → let myName;

// Initialization / Assignment → let myName = "John";

// Rif Name: declaration, initialization

// 2. var, let, const

// var → function-scoped, redeclarable, hoisted

// let → block-scoped, not redeclarable, hoisted in TDZ

// const → block-scoped, constant value, not redeclarable

// Rif Name: var, let, const, scope, hoisting, redeclaration, reassignment

// 3. Scope

// Global Scope → variable accessible anywhere

// Block Scope → variable inside {}

// Function Scope → variable inside function

// Rif Name: global scope, block scope, function scope

// 4. Reassignment & Redeclaration

// Reassignment → change value of variable

// Redeclaration → declare same variable again

// Rif Name: reassignment, redeclaration

// 5. Temporal Dead Zone (TDZ)

// let / const cannot be accessed before declaration

// Rif Name: TDZ, temporal dead zone

// 6. Hoisting

// var variables are hoisted → undefined

// Rif Name: hoisting

// 7. Data Types

// Primitive (value copied)

// string, number, boolean, null, undefined, bigint, symbol

// Reference (address copied)

// object, array, function

// Rif Name: primitive, reference, value copy, address copy

// 8. Dynamic Typing

// Variable can change type at runtime

// Rif Name: dynamic typing

// 9. Memory (Stack & Heap)

// Primitive → stack

// Reference → stack stores address → heap stores object/array

// Rif Name: stack, heap, primitive memory, reference memory

// 10. typeof Quirks

// typeof null → "object" (historical bug)

// typeof array → "object" → use Array.isArray()

// typeof function → "function"

// Rif Name: typeof, type quirks, Array.isArray()

// 11. Strings

// Single ' ', Double " ", Backtick ` `

// Rif Name: string literals, template literals

// 12. Example Patterns

// Primitive Example → independent copy

// Reference Example → shared object

// Rif Name: primitive example, reference example, object mutation



// | #  | Concept                 | Rif Name            | Short Note                               |
// | -- | ----------------------- | ------------------- | ---------------------------------------- |
// | 1  | Variable Declaration    | `declaration`       | Variable banana                          |
// | 2  | Variable Initialization | `initialization`    | Variable ko value dena                   |
// | 3  | var keyword             | `var`               | Function scoped, hoisted, redeclarable   |
// | 4  | let keyword             | `let`               | Block scoped, TDZ, not redeclarable      |
// | 5  | const keyword           | `const`             | Block scoped, constant value             |
// | 6  | Global Scope            | `global scope`      | Har jaga access ho sakta                 |
// | 7  | Block Scope             | `block scope`       | Sirf `{}` ke andar access                |
// | 8  | Function Scope          | `function scope`    | Sirf function ke andar access            |
// | 9  | Value Change            | `reassignment`      | Value change karna                       |
// | 10 | Re-declare Variable     | `redeclaration`     | Dubara declare karna                     |
// | 11 | Temporal Dead Zone      | `TDZ`               | let/const ko pehle access nahi kar sakte |
// | 12 | Hoisting                | `hoisting`          | var upar chala jata hai (undefined)      |
// | 13 | Primitive Types         | `primitive`         | Value copy hoti hai                      |
// | 14 | Reference Types         | `reference`         | Address copy hota hai                    |
// | 15 | Dynamic Typing          | `dynamic typing`    | Type change ho sakti hai                 |
// | 16 | Memory Stack            | `stack`             | Primitive store hota                     |
// | 17 | Memory Heap             | `heap`              | Object/Array store hota                  |
// | 18 | typeof operator         | `typeof`            | Data type check karta                    |
// | 19 | Array check             | `Array.isArray()`   | Array check karne ka sahi tareeqa        |
// | 20 | String Types            | `string literals`   | '', "", ` `                              |
// | 21 | Template String         | `template literals` | Backtick `` ` ``, interpolation          |
// | 22 | Object Change           | `object mutation`   | Reference change reflect hota            |


// truthy vs falsy
// false (0,null,undefined ,NAN ,"" , doucment.all)  is ko chnage karni ki  triaks (console mai !! is ka usehu gha or  is bad value for eaxmple !!0,!!"",!!NAN)

// OPERATOR

// +.-.*./.% (Arithmetic)
// =.==.===  (comparsion operator) == ye  type ko mage nhi kar ,=== lekkin  triple equal  type or value  ko dekh  kar tha hai answer detha hau?
// <.>.<=.>=. !=.!== !=(not strick) !==(strick)
// && ||
// ?:

// logical operator
// && (AND) is ami  dono condition true huni  chiye 
// || (OR) is mai  ek side  true  huna chiye   ye dnon side  chekc nhi kar tha
//  ! (NOT) is mai  value ka  nature agar  true hai  tu  false hu gati  yani  vlaue ka nature  change hu  jahtha hahi

// unary operator   (yer  srif  signal  vlaue  prr  chal tah hai)
// | Operator | Description                             | Example                       |
// | -------- | --------------------------------------- | ----------------------------- |
// | `+`      | Unary plus – converts operand to number | `let a = +"5"; // 5 (number)` |
// | `-`      | Unary minus – negates the value         | `let b = -10; // -10`         |
// | `++`     | Increment – adds 1                      | `let c = 3; c++; // 4`        |
// | `--`     | Decrement – subtracts 1                 | `let d = 3; d--; // 2`        |
// | `!`      | Logical NOT – converts truthy ↔ falsy   | `let e = true; !e; // false`  |
// | `typeof` | Returns type of operand                 | `typeof 5; // "number"`       |
// | `void`   | Returns undefined                       | `void 0; // undefined`        |
// | `delete` | Deletes a property from an object       | `delete obj.key;`             |

// trnary operator
//  10 > 10 ? console.log("Are cha hai ") : console.log(true);
//  condition : ? 

// instanceof  is ka  use hutha hai  jab hum varaible mai array,object  ,function{}  hai yani  hai 
// for example
// let a = function (){}
// console.log(a instanceof Object);
// or  ye  jab boolean mai  de tha hai

// AND Operator
// let  x   = false;  
// let y = true;
//  if (x>10 && y<10){
//     console.log("A") 
//  }else{
// console.log("B");
//  }


//  OR OperatorN

// let isAdmin = true;
// let isloggeIn = false

// if(isAdmin || isloggeIn ){
//     console.log("isAdmin");
// }else{
//     console.log("isLoggIN");
// }

// let temp = 30;
// if (!(temp > 35)) {
//     console.log("hot");
// } else {
//     console.log("cold");
// }

//  let a = 0;
//   if(a){
//     console.log("truely");
//   } else{
//     console.log("Fasly");

//   }

// let score = 68;

// let garde = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "c" : "Fail";

// console.log(garde);

// let ponit = 20;
// let status = ponit > 30 ? "Good" : ponit >10 ? " bed" : "apney ka loss  hu gaya hai";
// console.log(status);

// let loggedIn = true;
// let  hasToken = false;

// let admin = loggedIn  && hasToken ? "clear": "deny";
// console.log(admin);

// let  like = 100;
//  function likePost (){
//     return  ++like;
//  }
//  console.log(likePost());N
//  console.log(like);

// let count = 5;
// if (count-- === 5) {   ( triple  wqual  dekhtha value or  type or equal  srif  value dekhtha hai  )
//     console.log("match");
// }
// else {
//     log("not match");
// } 


// Control FLow 

// switch

// switch (2) {
//     case 1:
//         console.log("case 1") ;
//         break;
//     case 2:
//         console.log("case 2");
//         break;
//     case 3:
//         break;
//     default:
// }

// function grandval(val) {
//     if (val < 20) return "D";
//     else if (val < 40) return "C";
//     else if (val < 50) return "B";
//     else if (val < 70) return "A";
//     else return "A+"
// }
// // console.log(grandval(40));

// function gradeScore(score) {
//     if (score >= 90 && score <= 100) return "A";
//            if (score >= 80 && score <= 89) return "B";
//            if (score >= 70 && score <= 79) return "C";
//           if (score >= 60 && score <= 69) return"D";
//            if (score >= 33 && score <= 59) return "E";
//            if (score >= 0 && score <= 32) return "F";
//             else return "invalid";
// }

// console.log(gradeScore(90));

// loop ka  use vlaue  ko  repeat karney ko use krna hutha hai.
// Start = 10, End = 50, Step = 5
// for(let i = 2; i <= 20; i += 2){

//     console.log(i);
// }

// =============================
// for loop pattern 
//  for(start; end; change){
// code
// _____________________________
// }
// for(let i=2 ; i <= 40; i+=2){
//     console.log(i);

// }

// ============================================
// while loop pattern
// start
// while(end){
// code
// change
// }

// while
//  example
//  let i = 20;
//  while(i>=1){
//     i--;
//     console.log(i);  
//  }

// do-while(is ka use  hutha hai  jab  ap kko  code kam se kam ek bar  excute  karna hu , chehe condition fale hu  sahi  true)

// let i = 0;
//  do{
//    console.log(i);

//    i++;
//  }while(i<20)

// let names = ["ahad", "ahmed", "ali"]
// let i = 0;

// do {
//    console.log(names[i]);
//    i++;
// } while (i >= 0 && i < names.length)

// for (let i = 0; i <= 10; i++) {
//    console.log(i);
// }

// for (let i =10; i>=1; i--){
//    console.log(i);
// }

// let i =10;
// while(i>=0){
//    console.log(i);
//    i--;
// }

// even number for loop

// for (let i = 2; i <= 20; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }

// let i = 0;
// while (i < 16) {
//    if (i % 2 === 1) {
//       console.log(i);
//    }
//    i++;
// }

// table print
// for (i = 1; i < 11; i++) {
//    console.log(
//       `5 x ${i} = ${5*i}`
//    );

// }
// sum of  numver 1 to  101

// let sum  = 0
//  for(i =1; i<101; i++){
//    sum = sum + i;
//  }
//  console.log(sum);

// divide 3 
//  for(i =1; i<51; i++){
//    if(i%3===0){
//       ;console.log(i);

//    }
//  }

// old or even number

// let val = prompt("please enter a numver");

// for (i = 1; i <= val; i++) {
//    if (i % 2 === 0) {
//       console.log(`${i} is even number`);
//    } else {
//       console.log(`${i} is odd number`);
//    }
// }
// alert("Welcome!");

// let name = prompt("Apna naam likho");

// let isReady = confirm("Kya aap start karna chahte ho?");

// console.log(name);
// console.log(isReady);

// for (let i = 1; i < 101; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i);
//    }
// }

// break
// for(let i=1; i<101; i++){
//    console.log(i);
//    if(i%7===0){
//       break;
//    }
// }

// let count = 0;
// for (i = 1; i < 101; i++) {
//    if (i % 3 === 1) {
//       console.log(i);
//       count++;
//    }
//    if (count === 5) break;
// }
// continue
// for(let i=1; i<21; i++){
//    if(i%3==0){
//       continue;
//    }
//    else(console.log(i))
// }
// class Student {

//   constructor(name, age) {

//     // typeof check
//     if (typeof name !== "string") {
//       throw "Name must be a string";
//     }

//     if (typeof age !== "number") {
//       throw "Age must be a number";
//     }

//     this.name = name;   // this use
//     this.age = age;
//   }

//   introduce() {
//     console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
//   }
// }


// function createStudent(name, age) {

//   try {

//     let student1 = new Student(name, age);  // new use

//     // instanceof check
//     if (student1 instanceof Student) {
//       console.log("Student object successfully created ✅");
//     }

//     student1.introduce();

//   } catch (error) {

//     console.log("Error: " + error);

//   } finally {

//     console.log("Process finished 🔄");

//   }
// }


// // Function call
// createStudent("Ahad", 20);

// const [a, b, ...rest] = [1,2,3,4,5];
// console.log(a, b); // 1 2
// console.log(rest); // [3,4,5]


// function statement
// function abcd(){

// }

// function expression
// let fuc = function(){

// }

// // arrow function
// () =>{
// (
// }


// arguments and parameters

// function abcd(parameters, parameter){  parameter  us ko  boltey hai  jab  function  banatey  hai  or  use mai ju value huti hai wo  jab  function ko call  karety waqt  value  asign kar tey hai wo value parameter  mai ati hai orphir is ka result ata hai
//  console.log(parameters+parameter);

// }
// // abcd( 2,2)  (argument is ko  boltey  jab hum function ko  call  karety hai or us mai value pass kartey hai  for example abcd(2,2)

// default Parameter  ka matlab hai jab fucntion  bantey hai  or us function ko call kartey hai , function ko call tu  kar diya  lekin  value  assign  nhi hai  is surat answers  undefined  aye gha  kyu hum  function  call kia haui lekin  vlaue nhi di ,parameter  mai  value undefined  hai  is liye  answer  undefined ate hau  is surat  mai  ke  answers  undefined atah hai  is hum parameter ko defualt  value degy  for  eample  function ahad(val1=0 , val2=2)

// function ahad(val1 = 0, val2 = 0) {
//     console.log(val1, val2);
// }
// ahad(1, 3)

// rest operator kia hutha haui (jab arugment bhut sari hu tu tu parameter  bhi bhut sare  hu gy is se bacney ke liye hum rest operator ka use  karety hau  function ke parameter mia  ... space mai  lagatey hau is ko  reset operator  bol tey hai  )

// function abcd(...val){
// console.log(val);

// }
// abcd(1,2,3,4,5,6,7,8,9)

// first class function ko hm value ki trah  use kar sakhtey hai
// first class function ki  hutha hai fro example  let abcd =  12 -> ye varaible  hai  hum value mai function banatey hau for eaxmple let name =  function (){}  or phir call kar do  name () or is ko  bhi  boltey hai  ja  hum function call kartey hai waha bhi value huti hai  wah bhi  hum function banatey sakhtey hai for-example name(function(){}) -> is mai parameter nhi de saktey haui  

// function fcf(val) {  -> hight order function is ko  boltey hai hum parameter mai  function call kartey hai us ko  boltey hai highr order function
//     val()
// }
// fcf(function () {
//     console.log('is ko  boltey hai first class function lekin is mai hum parameter nhi de sakhtey hai ');

// })

// Closure kia hota hai?
// closure  is ko  boltey hai sab function ke ander  function ko  retrun karey tu or return wala  function parent function ke ander varaible  ko return funtion mai ues  karey is ko closure  boltey hai 

//     function abcd() { -> parent function 
//         let a = 12;   parent mai variable ko child mai  ues karna

//          function abcde () {  -> child  function 
//             a++;  ye  ues  hu raha hai
//             console.log(a);
//         }
//         return abcde; child function ko  return kar diya hai
//     }

// let counter = abcd()
// counter()
// counter()

// IIFE (immediately invoked function expression)

// (
//     function () {
//         let count = 0;

//         for (let i = 0; i < 10; i++) {
//             count++;
//             console.log(count);

//         }
//     }
// )();

// abcd()

// let abcd = function (){
//     console.log("hay");

// }   is fucntion ko function declaration  botey haiu  (ye  hositng hutey hai)

// abcd()

// let abcd = function(){
//     console.log("expression ");
// }  is ko  boltey haiu  function expresion   (ye  hoisting  hutey hau )


// function getScore(...scores) {

//     // console.log(scores);
//     let total = 0;
//     scores.forEach(function (val) {
//         total = total + val
//         // console.log(total);
//     })
//     return total;
// }
// console.log(getScore(1, 2, 4, 5, 6));

// function ahad(val) {  is function hum high order  function boltey hai
//     val();
// }

// ahad(function () {
//     console.log("hey");

// })

// Higher Order Function (HOF) wo function hota hai jo:

//  Dusra function ko parameter mein leta hai,
// YA

//  Kisi function ko return karta hai
// function high() {
//     return function () {
//         console.log("hey");
//     }   
// }
// high()()

// First-Class Citizen Kya Hoti Hai?

// Functions ko variable mein store kar sakte ho

// Functions ko argument ke taur par pass kar sakte ho

// Functions ko return kar sakte ho

// Functions ke properties bhi ho sakte hain

// let  fcC = function  (){

// }

// fcC()  is ko  frist class  citizen boltey hai

// bmi calculator

// function bmi(weight, height) {
//     return bmi = weight / (height * height)
// }
// console.log(bmi(30, 1.7).toFixed(2));

// function bmicalculator(weight, height) {
//     let bmi = weight / (height * height);
//     if (bmi < 18) return "underweight:" + bmi.toFixed(2);
//     if (bmi < 25) return "Normal Weoight:" + bmi.toFixed(2);
//     if (bmi < 30) return "ovrelap weight:" + bmi.toFixed(2);
//     return "abese:" + toFixed(2);
// }

// console.log(bmicalculator(40, 1.4));

// function discountcalculator(disCount) {
//     return function (price) {
//         return price - price * (disCount / 100);
//     }
// }
// let disCount = discountcalculator( 10)
// console.log(disCount(10));
// const createDiscountCalculator = (discount) => {
//     // discount: percentage, e.g., 20
//     if (discount < 0 || discount > 100) {
//         throw new Error("Discount should be between 0 and 100");
//     }

//     // Inner function returns the discounted price
//     return (price) => {
//         if (price < 100) throw new Error("Price cannot be negative");
//         return price - price * (discount / 100);
//     };
// };

// //  Create different discount functions
// // const twentyPercent = createDiscountCalculator(-20);
// const fiftyPercent = createDiscountCalculator(50);
// const tenPercent = createDiscountCalculator(10);

// //  Use the functions
// console.log(fiftyPercent(200));  // 100
// console.log(tenPercent(50));     // 45

// Array

// method is ko boltey hau .pop() barket lagney ko  method boltey hai for arr.pop()
//   push use  hai last mai vlaue ko  add karna 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.push(72)
// arr.pop() pop ka use  hai tha hai last se delete karna
// arr.shift() is ka use  hai start se value  ko  delete karna
// arr.unshift(73) is ka use  hai start se add karna hai
// arr.splice(2,2,72)  is ka use  hai kaha se yani kitney index bad  add karni hai , value ka matlab kitni vlaue delete karni hai ,third value ka mtlab hai kitni add karni hai (kitni value bad add karni hai, kitni delete karni hai, or vlaue ko add karni hai)
// arr.splice(2,3,44,56)
// let newArr = arr.slice(0,2) is ka use hutha hai new arrey ko baney mai , matlab agar frist arrey maise 1 to 3 vlaue  chiye tu hum slice ka use kartey hau  first vlaue index hutha hau or second value ka matlab hai kitni value chiye for example (0 index se, 3 index tak chiye )
// arr.reverse() is use hutha hai arrey ko  reverse karne ke liye

// let arr1 =  [3,2,4,1,5,7,6]
// arr1.sort(function(a,b){
//     return a- b;
// // })  is ka use hutha hau arr ko  tartib dene ke liye ascending se descending  ke liye

// foreach is ka use hutha hai ye array pr hr ek key liye function ko alag  alag chala tha hai
// arr.forEach(function(val){
//     console.log(Math.floor(  val/5));
//     console.log(val/5);

// })

// map ek arreay  method hai ju har elemnet pr function  ko apply karta hai or  naya array return karta 
// original array  change nhi kartah 
// hamsha naya array retrun kartha hau 

// let newarr = arr.map(function (arr1) {
//     return arr1 * 2;
// })
// console.log(newarr);

// filter array ka method hai ya condition check karta hai or ye us element ko  return karta hai ju srif true huti hai
// let filterArr = arr.filter(function (val) {
//     if (val > 4) return true;
// })

// reduce array ki sare element ko  use  kar key  ek singal vlaue bana detaah hai
// //  syntax 

// array.reduce(function(accumulator, currentValue, index, array){
//     return updatedAccumulator;
// }, initialValue);

// Important Terms:

// accumulator → result jo store hota rehta hai

// currentValue → current element

// initialValue → starting value

// let reduceArr = arr.reduce(function (accumulator, val) {
//     return accumulator + val;
// }, 0);
// console.log(reduceArr);

// find  arrray ka method haai ju  array ki elemnet ko return kartha hai  to  given condition ko satifay kary

// let findArr = arr.find(function (num) {
//     return num > 4
// })
// console.log(findArr)

// objectArr = [
//     { id: 1, key: 1 },
//     { id: 3, key: 1 },
//     { id: 1, key: 2 },
// ];

// findArr1  = objectArr.find(function(val){
//     return  val.id===1
// })
// console.log(findArr1);

// some array ka method hai is ka kam hutha hai ye array ke  element mai condition ko dekhtha hai  ture haiya nhi hai 
// Agar ek bhi element true kare → true return karega

// Syntax
// array.some(function(element, index, array){
//     return condition;
// });

// let someArr = arr.some(function (val) {
//     return val < -8;
// })
// console.log(someArr);

// every array ka method hai ye  array ke  sare  element ko dekh tha hai key ye  sare  ture  hai hau yani 

// let everyAr = arr.every(function (val) {
//     return val > 5
// })
// console.log(everyAr)

// Desturcture  array ya object ki value ko directly varaible mai nikalna yani hum ko  1,2,3,5, chiye lekin hum ko 4  nhi chiye tu us ki jhagha  ko chor  de gy   
// interview type answer:
// Destructuring JavaScript ka ek ES6 feature hai jisme hum array ya object ki values ko directly variables me extract kar sakte hain ek clean aur short syntax ke sath.
// let [a,b, , ,d] = arr

// Spread operartor
// Answer:
// Spread operator (...) JavaScript ka ES6 feature hai jo array, object, ya iterable values ko expand (phaila) deta hai.

// Iska main kaam hota hai:

// Copy banana

// Merge karna

// Values ko expand karna

//  let arr2 = [...arr]
//  console.log(arr2);

// merge and copy karna

// const user = {name:"Ahad"};
// let newUser = {...user, age:20}
// console.log(newUser);

// function arguement spread operator

// const nums = [1,2,0.5,3,4,5,6]
// console.log(Math.min(...nums));

// merge

// const a = [1,2];
// const b= [3,4];
//  const merge = [...a,...b]
//  console.log(merge);

// let arrNew = arr.map(function(arr1){{
//     return arr1*2;
// }})
// console.log(arrNew);

// let arrfilter = [20, 30, 10, 5,]
// const filArr = arrfilter.filter(function (val) {
//     return val => 10;
// })
// console.log(filArr);

// let  Arrreduce = arr.reduce((accl, val) =>{
//     return accl + val
//   },0)
//   console.log(Arrreduce);

// const findArr = arr.find(function (val) {
//     return val < 10
// })
// console.log(findArr);

// const someArr = arr.some(function(val){
//     return val <10  
// })
// console.log(someArr);

// const evenNums = [2, 4, 6, 8, 10];
// const everyNum = evenNums.every((val) => {
//     return  val %2 ===0;
// }) 
// console.log(everyNum);

// destructure the array 

// let fullName = ["Ahad", "Ahmed"];
// let [firstName, lastName] = fullName;
// console.log(firstName, lastName);

// spreade operator
// let fName  = ["Ahad"];
// let lName = ["Ahmed"];

// let mergeArr = [...fName,...lName];
// console.log(mergeArr);

// let arrCopy = [...arr]
// console.log(arrCopy);


// Object

// let obj = {
//    key  name: "Ahad" value,
//     age: 20,
//     skill: true
// };
// console.log(obj.name);
//   key value sturcutre  ->  key  name: "Ahad" value,

// Dot vs bracket notation (agra  mujhe object key  ander  ki vlaue ko dekhna hau tu mia object. ka  use karo  gha phir mai dekh sakhtha hu ) for exmpple  console.log(obj.name)

// nesting and deep access

// const user = {
//     id: 1,
//     name: "Ahad",
//     age: 20,
//     address: {
//         location: "newKarachi",
//         City: "Karachi",
//         PostalCode: 7453
//     },
// }
// console.log(user.address.location);
// console.log(user.address.City);
// user.address.locati;on;

// Destructing  is ka use hai jab hum object mai se properties ko nikal tey hau fror example user.address.location jab bhu mihe  properties  chiye tu  mai  bar is ko  lekhu gha is ko short karney key liye destructuring ka use kartey hai  is ko karey ke few  tarikey hutey hau  is se hum defual value bana  bhi sakhtey hau  
// frist normal traika 
//  let user = {
//     name:"ahad",
//     age: 20,
//     city:"karachi"
//  }
//  let name = user.name;
//  let age = user.age;
//  console.log(age);

// second  tarika  curly barket mai properties ka name likhney es  varaible ban jatha hau

//  let user = {
//     name:"ahad",
//     age: 20,
//     city:"karachi"
//  }

// let {name,age,city} = user;
// console.log(name,city);

// default vlaue bana ka tarika
//  let user = {
//     name:"ahad",
//     age: 20,
//     city:"karachi"
//  }
// let {fName="Ateeq Ahmed"} = user
// console.log(fName);

// object mai loop ka use for .. in ka use object mia  properties ko  ek ek kar key  access karney  ke liye use  hutha hai or is mai key name  hum chuk bhi rakh sakhtey hai key is liye  lekhtey hai key object mia se properties laye is ka matalb  ye hai for(let ahad in user) properites le kar ao user  name ke object ke ander se 

// let user = {
//     name:"ahad",
//     age: 20,
//     city:"karachi"
//  }

//  for(let ahad in user){
//     console.log(ahad + ":" + user[ahad]);
//  }`

//  object.keys() is ka use hutha hai object ki key  ko ek array ke  form mia return kar tha hau 
// for example : [id, name,city,age]
// let role = "admin"

// let user = {
//     id: 1,
//     name: "Ahad",
//     age: 20,
//     city: "lahore",
//     [role]: "Ahad",
// }
// let user2 = {
//     id: 1,
//     name: "Ahad",
//     age: 20,
//     address: {
//         city: "lahore",
//     },
// }

// let keys = Object.keys(user)
// console.log(keys);

// Object.values is ka use hutha hai objrct ki value ko  array mau return karna  
// for example : [1,Ahad,Karachi,20]

// let value =  Object.values(user)
// console.log(value);

// Object.entries is ka use hutha hau object ki key or value ko  array mai  return kar hai yani dono
// for example:  [id:1]
// (4) [Array(2), Array(2), Array(2), Array(2)]
// ['id', 1]
// ['name', 'Ahad']
// ['city', 'Karachi']
// ['age', 20]

// let entries = Object.entries(user)
// console.log(entries);

// object mai bhi ...spread ka kam copy karna hai
// Object2 = {...user}

// jab object mai  nested object bana hu or is ko copy karey hu spread opeartor se tu ye nested ko copy nhi karey gha  is liye  ko  complete copy kaney ke liye hum  deep clone  ko use kartey hai 
// let obj2 = JSON.parse(JSON.stringify(user2));
// obj2.address.city = "Karqachi",
// console.log(obj2);

//  JSON.stringify is ka kam hutha hai  ye array ko string mai convert  karta hai
//  JSON.parse is ka kam hutha hai  ye array ko object mai convert  karta hai

// optional chaining  ya ek javascript operator hai ia ka use hutha hai agar  properties  exist karti hai tu do nhi karti tu nhi do is ka use karney se  error nhi atha hai 

// console.log((user2.addresss?.city)); is mai addresss ki key nhi exist nhi karti hai  is  liye undefined de raha hai

// computed properties
// console.log(user);

// const course = {
//     title: "javascript",
//     duration: "4 month",
// }

// Object.entries(course).forEach((val) => {
//     console.log(val[0]+ ": " + val[1]);
// })


// DOM 
// ID se select

// const box = document.getElementById("box"); ye id ko  select kartha hau 
// box.textContent = "I am Ahad Ahmed!"
// console.log(box);

// Class se select (first element)
// const firstRed = document.querySelector(".red"); is se hm id or  class ko  select kar sakhtey hai 
// console.log(firstRed);


// Class se sab elements
// const allRed = document.querySelectorAll(".red"); is se hm id or  class ko  select kar sakhtey hai 
// console.log(allRed);

// const allRed = document.querySelector(".reD"); 
// allRed.innerHTML = "<p> ye inner HTML html  ko change karta hai </p>"
// console.log(allRed);
// allRed.hidden = true;

// setAttribute is ka use  hutha hai  attribute ki vlaue  set karna ya  change karna
//  setAttribute("src","https://media.istockphoto.com/id/155277394/photo/shattering-window-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=tTWdwNsxcGLCTeT_z5d7s1zh5R4zuVEFvWOfnxz3Wrc=")
// element.setAttribute("attributeName", "newValue")
// let img = document.querySelector("img")
// img.setAttribute("src" , "https://media.istockphoto.com/id/155277394/photo/shattering-window-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=tTWdwNsxcGLCTeT_z5d7s1zh5R4zuVEFvWOfnxz3Wrc=")

// getAttribute is ka use hutha hai  attribute  ko  read kar karney liye 
// Purpose: Attribute ka value read karna.

//  let a = document.querySelector("a");
//  console.log( a.getAttribute("href"));

// removeAttribute is  ka use hutha hai  arttribute ko remove karney ke liye hutha hai 
// let a = document.querySelector("a")
//  console.log(a.removeAttribute("href"));

// Dynamic Dom  Maipulation 
// createElement is ka use hutha hai  javascript se  element ko  create karna  
// prepend ka use huth hai start mai  add karna 
// appendChild ka use hutha hai end mai  add karna 

// let h1 = document.createElement("h1")
// h1.innerHTML = "craetElement ka use kar key  element kia hai "
// document.querySelector("body").appendChild(h1)
// console.log(h1);

// remove se element remove  hutey  hai
// let h1 = document.querySelector("h1")
// h1.remove()

// removeChild ye  parent key child ko  remive karna hau  ya  direct  nhiu kartha hai delete
// const container = document.getElementById("container");
// const div2 = document.getElementById("div2");
// const btn = document.getElementById("removeBtn");

// btn.addEventListener("click", function() {
//     container.removeChild(div2); // Parent ke through element remove
// });

// remove () or  add()  toggle() method
// remove class  ko  remove kar ta hai 
// add class  ko add kartha hai
// toggle class hai tu is ko  hatha de gha  agar  nhi hau tu  laga de gha (// agar nahi hai → add, agar hai → remove)
//  document.querySelector("h1").classList.remove("remove")
// document.querySelector("h1").classList.add("remove")
// document.querySelector("h1").classList.toggle("remove")
// document.querySelector("h1").classList.contains("remove")


// DOM Practice

// const fruits = ["Apple", "Banana", "Orange", "Mango"]
// let list = document.querySelector("#mylist")
// let btn = document.querySelector("#btn")


// btn.addEventListener("click", function () {
//     list.innerHTML = ""
//     fruits.forEach(function (fruits) {
//         console.log(fruits);
//         const li = document.createElement("li")
//         li.textContent = fruits;

//         li.addEventListener("click", function () {
//             li.remove()
//         })
//         list.appendChild(li);

//     })

// })

// let todoInput = document.querySelector("#todoInput")
// let addBtn = document.querySelector("#addBtn")
// let todoList = document.querySelector("#todoList")

// addBtn.addEventListener("click", function () {

//     const todoText = todoInput.value.trim();
//     if (todoText === "") return;

//     const li = document.createElement("li");
//     li.textContent = todoText;

//     const btnDelete = document.createElement("button")
//     btnDelete.textContent = "Delete";
//     btnDelete.style.backgroundColor = "white";
//     btnDelete.style.color = "red";
//     btnDelete.addEventListener("click", function () {
//         li.remove();
//     })
//     li.appendChild(btnDelete);

//     todoList.appendChild(li);
//     todoInput.value = "";
// })

// Events and Event Handling:(event ke throught hum javascript ko  bil dete hai ye  jab action hu tu ya kam karo) action (action ko botey haui jab user click ,double  click , hover,scroll etc ) browser action( page load  resize,from submit )

// Syntax  (function mia ju (e) hai is ko event object  trigger botey hai , event object mai  sari infromation ati hai  element ki)
//  Element.addevenlistener("event name",function(e)){   
//     code
//})

// Type of Event
// Mouse Event 

// Click  → button ya element par click
// dblclick → double click
// Mouseover → mouse element par hover
// mouseout → mouse element se bahar
// mousedown → mouse button press
// mosueup → mouse button release

// Keyboard Events

// keydown → key press hoti hai
// keyup → key release hoti hai
// keypree → key press aur hold

// From Events

// submit-> form submit
// change → input value change
// focus  ->input field focus
// blur → input field focus khatam

// Window/Document Events

// load → page fully load ho gaya
// resize → window size change
// scroll → page scroll hua

// Example: Mouse aur Keyboard Event

// const inputBox = document.querySelector("#inputBox")
// const clickBtn = document.querySelector("#clickBtn")

// clickBtn.addEventListener("click",function(){
//     clickBtn.style.backgroundColor = "red"
//     clickBtn.textContent = "ahad"
//     inputBox.value="";
// })
// inputBox.addEventListener("keydown",function(event){
//     if(event.key === "backspace"){
//         event.preventDefault();
//     console.log("key pressed :" + event.key);
//     }
//  })


// Change Event Example ye  input , textarea , select mai  use tuha hau  (chnage event  ka use hutha hau jab for example user ne course select kia hai  us ko  mention hu  key  tu  ne  couser  ko select kar liya hai,asi condition mai chnage event  ko  use  kartey hai)

// let sel = document.querySelector("select")
// let dev = document.querySelector("#device")

// sel.addEventListener("change",function(det){
//     // console.log(det.target.value);
//     dev.textContent = `${det.target.value} Device Selected`;
//     dev.style.padding = "20px";
//     dev.style.fontSize = "40px";
//     dev.style.color = "red";    
// })

// keydown event (keydown event  tab trigger hutha hau jab  koi keyborad mai koi  key [press] karta haior wo  turant hi chal jha tha hai)

// for example

// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", function (det) {
//     //  console.log(det.key);
//     if (det.key === " ") {
//         h1.textContent = "SPC";
//     } else {
//         h1.textContent = det.key;
//     }
// })

// let fileinp = document.querySelector("#fileinp")
// let btn = document.querySelector("#btn")
// btn.addEventListener("click", function (det) {

//     fileinp.click();
// })

// fileinp.addEventListener("change", function (det) {
//     console.log(det.target.files[0].name);
//     btn.textContent = det.target?.files[0].name;
// })


// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")
// let main = document.querySelector("#main")

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();


//   if(
//     inputs[0].value === ""||
//     inputs[1].value === "" ||
//     inputs[2].value ===""||
//     inputs[3].value === ""||
//     inputs[4].value === ""
//   ){
//     alert("Please fill all the fields")
//     return;
// }
//   let card = document.createElement("div");
//   card.classList.add("card")

//   let profile = document.createElement("div")
//   profile.classList.add("profile")

//   let img = document.createElement("img")
//   img.setAttribute("src", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d")
//   img.classList.add("img")

//   let name = document.createElement("h2")
//   name.innerText = inputs[0].value
//   let age = document.createElement("p")
//   age.innerText = inputs[1].value
//   let email = document.createElement("p")
//   email.innerText = inputs[2].value
//   let distribution = document.createElement("p")
//   distribution.innerText = inputs[3].value


//   profile.append(img)
//   profile.append(name)
//   profile.append(email)
//   profile.append(age)
//   profile.append(distribution)


//   card.appendChild(profile)

//   main.append(card)


//   form.reset()
// })

// Type	Direction
// Capturing	Parent → Child
// Bubbling	Child → Parent

// bubbling event kia hu ti hai  for eaxpmle  do div hai  ek parent or  dosra child hum  ne eventlistner  laga ya hai  parent pr child pr  nhi  lagay hai  hum click kr raha hai child pr child pr tu  event hi nhi hai  is  wo  bubble hu kar  parnet  pr  aye gha or event  prform kare gha

// span = document.querySelector("span")

// document.querySelector("input").addEventListener("input", function (dets) {
//   //  console.dir(dets.target.value.length);
//   //  span.textContent = 20 - dets.target.value.length;

//   let left = 20 - dets.target.value.length
//   span.textContent = left;
//   if (left < 0) {
//     span.style.color = "red"
//   }
//   else {
//     span.style.color = "white"
//   }

// })



// form validation

// let email = document.querySelector("#email")
// let password = document.querySelector("#password")
// let form = document.querySelector("form")


// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     document.querySelector("#emailError").textContent = ""
//     document.querySelector("#passwordError").textContent = ""
//     document.querySelector("#loginSuccess").textContent = ""

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


//     let emailans = emailRegex.test(email.value)
//     let passwordans = passwordRegex.test(password.value)



//     let valid = true;


//     if (!emailans) {
//         document.querySelector("#emailError").textContent = "Email is incorrect";
//         email.value = "";
//         valid = false;
//     }

//     if (!passwordans) {
//         document.querySelector("#passwordError").textContent = "password is incorrcet"
//         password.value = "";
//         valid = false
//     }

//     if (valid) {
//         document.querySelector("#loginSuccess").textContent = "Login Successfull";
//         email.value = "";
//         password.value = "";
//     }
// })


// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {

//     if (document.body.classList.contains("dark")) {
//         document.body.classList.remove("dark")
//         document.body.classList.add("light")
//         localStorage.setItem("theme", "light")
//         btn.textContent = "Dark mode"
//     }
//     else{
//         document.body.classList.remove("light")
//         document.body.classList.add("dark")
//         localStorage.setItem("theme", "dark")
//         btn.textContent = "light mode"
//     }

// })

// fetch("https://api.example.com/users")
//   .then(res => {
//     if (res.status === 200) {
//       return res.json();
//     }
//   })
//   .then(data => {
//     console.log(data.status);
//   })
//   .catch(err => console.log("Error:", err));

// const form = document.getElementById("userForm");

// form.addEventListener("submit", function (val) {
//     val.preventDefault();

//     const name = document.querySelector("#name").value;
//     const age = document.querySelector("#age").value;

//     fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             age: age
//         })
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log("Succecc", data);
//             form.reset();
//             alert("User Add Succeeflly")
//         })
//         .catch(err => {
//             console.log("Error", err);
//             alert("Something went wrong")
//         });
// });

// module Pattern  mia hum  IIFE use kartey hai  invoke function   mai  banatey hai IIfe mai  ju  ate hai  wo private  hu jatha hai or us ko  access karene ke  liye  return karety  hai object mai(return mai  wo dal tey hai  ju access  karna  hu tha hai )

// for example

// let Bank = (function () {
//     let Balance = 1200;

//     function checkBalance(val) {
     
//         console.log("Currnet Balance:" + Balance);
//     }

//     function setBalance(val) {
//         Balance += val;
//         console.log("Balance updated:" ,Balance);
        
//     }
//     function withdraw(val) {
//         if (val <= Balance) {
//             Balance -= val;
//             console.log("Withdraw Balance:",Balance);
//         }
//     }
//     return {
//         checkBalance,
//         setBalance,
//         withdraw
//     }
// }());

// Bank.checkBalance();
// Bank.setBalance(500)
// Bank.checkBalance()
// Bank.withdraw(1000)

// Revealing Module Pattern  is ka use same hai  module  pattern  kia trah  bas ek  change hai  revealing  mai  is mai hum return mai ju  function ko  pass kartey hai  un ko ek key mai  set kartey hai

// let Bank = (function () {
//     let Balance = 1200;

//     function checkBalance(val) {
     
//         console.log("Currnet Balance:" + Balance);
//     }

//     function setBalance(val) {
//         Balance += val;
//         console.log("Balance updated:" ,Balance);
        
//     }
//     function withdraw(val) {
//         if (val <= Balance) {
//             Balance -= val;
//             console.log("Withdraw Balance:",Balance);
//         }
//     }
//     return {
//         check:checkBalance,
//         Balance:setBalance,
//         draw:withdraw
//     }
// }());

// Bank()