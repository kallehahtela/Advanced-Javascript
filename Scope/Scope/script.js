//  scope 
var b = "Can I access this?";

function bb() {
    var a = "hello";
    console.log(a);
}

// Root Scope (window)
var fun = 5;

function funestFunction() {
    // child scope
    var fun = "AHHHH";
    console.log(3, fun);
}
