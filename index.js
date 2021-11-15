console.log("From separate file");
console.log("From separate file again");
let name = 'chakri';
let salary = 35.5;
let user = {

    name : "Chakri",
    age : 32,
    designation : "QA",
    role : "Lead"

};
console.log(user);

let languages = ['Python', 'JS', 'Java'];
console.log(languages[1]);
languages[1] = 'Ruby';
console.log(languages[1]);

function addition(num1,num2){

    return num1+num2;

}

let result = addition(13,34);
console.log(result)

function square(num1){

    return num1*num1;
}

let square_result = square(9);
console.log(square_result)

let p = 1;
console.log(p++);
console.log(++p);

let points = 110;
let membership = points > 100 ? 'gold' : 'silver';
console.log(membership);

for (let i = 0; i <= 10; i++){
    console.log("Hello, this is a for loop");
    console.log(i);
}

let i = 3;
while(i<=10){
    console.log("Hello, this is a while loop");
    console.log(i);
    i++
    
}