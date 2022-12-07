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
