function helloWorld(){
    return "Hello, World!";
}


function sayHello(input) {
    if (input === true || input === false) {
        return "Hello, Boolean!"
    } else if (input === Number || input === null) {
        return "You're a bot!"
    } else {
            return "Hello, " + input + "!";
        }
}


