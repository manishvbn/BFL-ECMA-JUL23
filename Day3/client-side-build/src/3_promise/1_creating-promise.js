function getData() {
    var promise = new Promise((resolve, reject) => {
        // Async Code
        setTimeout(function () {
            // resolve("Hello BFL");
            reject("Something went wrong");
        }, 5000);
    });
    return promise;
}

var promise = getData();
// console.log(promise);

// promise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.error(err);
// });

// promise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error(err);
// });

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    console.warn("Finally will always run");
});