// type : boolean / string / number
// check code at compile time
var value = 10;
// value = "12";
console.log(value);
var student = {
    name: "saugat",
    address: "12"
};
var myUniversity = "tu";
// specify type for function parameter
function add(a, uni) {
    console.log(a + "myuniversity = " + uni);
}
add(5, "tu");
function addnum(a, b) {
    var rese = a + b;
    return rese;
    // return a + b;
}
addnum(5, 4);
//oop concept can be used easily using gs
var Animal = /** @class */ (function () {
    function Animal() {
        this.color = 'red';
    }
    return Animal;
}());
// ts provide generics
