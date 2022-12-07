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

function isFive(num){
    num = parseInt(num)
    return num === 5;
}
