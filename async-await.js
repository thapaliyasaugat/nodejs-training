isreject = true;
const awaitResult = () => {
    return new Promise((resolve, reject) => {
        if (isreject) {
            resolve("resolved");
        } else {
            reject("rejected");
        }
    })
}
function promiseresult1() {
    awaitResult()
        .then((res) => { console.log(res) })
        .catch((res) => { console.log(res) })
}
promiseresult1()

async function promiseresult2() {
    const result = await awaitResult();
    console.log(result)
}
promiseresult2();


const promiseresult3 = async () => {
    const result = await awaitResult();
    console.log(result)
}

promiseresult3()