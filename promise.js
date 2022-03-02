isreject = true;

// 3 states of promise : pending , resolve,reject

// then - catch

const sample = new Promise((resolve, reject) => {
    if (isreject) {
        setTimeout(() => {
            resolve()
        }, 5000)
        // console.log("promise");
    } else {
        console.log("reject");
        reject();
    }
})

setTimeout(() => {
    console.log("settimeout")
}, 3000);

sample.then(() => {
    console.log("then resolved")
}).catch(() => {
    console.log("catch ")
})




