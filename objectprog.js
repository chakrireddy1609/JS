let person = {

    name:"chakri",
    age : 32,
    role:"Lead QA",
    company : "Joveo",
    displayrole : function(){
        console.log("This is to test function within object")
    }
}
    console.log(person.displayrole());
    console.log(person.name);
    for (key in person){
        console.log(person[key])
    }

