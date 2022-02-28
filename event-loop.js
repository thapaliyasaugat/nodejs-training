function first() {
    console.log("first")
}
function second() {
    // macro function --> message queue
    setTimeout(() => {
        console.log("Second")
    }, 0)
}
function third() {
    console.log("third")
    // micro function -->job queue
    new Promise((resolve) => {
        return resolve();
    }).then(() => {
        console.log("inside promise")
    })
    second();
    first();
}
third();
