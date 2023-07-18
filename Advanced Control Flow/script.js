// codition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied!";

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access Denied!";
    }
}

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not available");

var answer2 = condition();

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a enemy";
            break;
        case "back":
            whatHappens = "you arrived to work";
            break;
        case "right":
            whatHappens = "you found a lake";
            break;
        case "left":
            whatHappens = "you run into a Rick Roll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}