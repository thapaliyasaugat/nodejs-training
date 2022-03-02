// type : boolean / string / number
// check code at compile time
let value: number = 10;
// value = "12";
console.log(value);


//creating interface for object
interface Student {
    name: string,
    address: string
}

let student: Student = {
    name: "saugat",
    address: "12",
}

// create custom type using type keyword
// | -> union
type University = "tu" | "pu";
const myUniversity: University = "tu";


// specify type for function parameter
function add(a: number, uni: University) {
    console.log(a + "myuniversity = " + uni)
}
add(5, "tu");


function addnum(a: number, b: number): number {
    const rese = a + b;
    return rese;
    // return a + b;
}
addnum(5, 4);


//oop concept can be used easily using gs
class Animal {
    private color = 'red';
    constructor() {

    }
}
// ts provide generics

