function helloWorld(){
    return "Hello, World!";
}

let noGreet = [ Number, null, ""]

function sayHello(input) {
    if (input === true || input === false) {
        return "Hello, World!"
    } else if (input === noGreet) {
        return "You're a bot! But hello anyways."
    } else {
            return "Hello, " + input + "!";
        }
}

function isFive(input){
    input = parseInt(input)
    return input === 5;
}

function isEven(input){
    if (typeof input === 'boolean'){
        return false;
    }
    return input % 2 === 0;
}

function isVowel(input) {
    if (typeof input !== 'string'){
        return false;
    }
    input = input.toLowerCase();
    if (input === "a" ||
        input === "e" ||
        input === "i" ||
        input === "o" ||
        input === "u") {
        return true;
    } else
        return false;

}

function add(input1, input2){
   if (isNaN(input1) || isNaN(input2)){
       return NaN;
   }
    return +input1 + +input2;

}
