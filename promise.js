isreject = false;
const sample = new Promise((resolve, reject) => {
    if (isreject) {
        setTimeout(() => {
            resolve()
        }, 3000)
    } else {
        console.log("reject");
        reject();
    }
})

sample.then(() => {
    console.log("then resolved")
}).catch(() => {
    console.log("catch ")
})