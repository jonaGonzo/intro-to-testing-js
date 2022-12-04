function helloWorld(){
    return "Hello, World!";
}

let noGreet = [ Number, null, ""]

function sayHello(input) {
    if (input === true || input === false) {
        return "Hello, Boolean!"
    } else if (input === noGreet) {
        return "You're a bot!"
    } else {
            return "Hello, " + input + "!";
        }
}


