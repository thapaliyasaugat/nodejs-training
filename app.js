// env variable in powershell
// $env:NAME="saugat" node app.js

console.log("env variable name : " + process.env.NAME);
// const printer = require('./print')
const { print, print2 } = require('./print')

function printapp() {
    console.log("app")
}
printapp();
print("print")

// printer.print("saugat");
// printer.print2();

print2();

// printer("saugat");
// console.log(module)