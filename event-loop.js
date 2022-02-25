function first() {
    console.log("first")
}
function second() {
    setTimeout(() => {
        console.log("Second")
    }, 2000)
}
function third() {
    console.log("third")
    second();
    first();
}
third();