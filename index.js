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