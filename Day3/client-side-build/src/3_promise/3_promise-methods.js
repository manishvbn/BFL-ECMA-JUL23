function firstMethod() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('first method completed...');
            resolve({ first: 'added from first method' });
        }, 2000);
    });
    return promise;
}

function secondMethod() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('second method completed...');
            resolve({ second: 'added from second method' });
        }, 3000);
    });
    return promise;
}

function thirdMethod() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('third method completed...');
            // resolve({ third: 'added from third method' });
            reject("Some Error...");
        }, 1000);
    });
    return promise;
}

// Promise.all([firstMethod(), secondMethod(), thirdMethod()]).then((data) => {
//     console.log(data);
// }).catch(eMsg => {
//     console.error(eMsg);
// });

// Promise.race([firstMethod(), secondMethod(), thirdMethod()]).then((data) => {
//     console.log("Success:", data);
// }).catch(eMsg => {
//     console.error("Error:", eMsg);
// });

Promise.any([firstMethod(), secondMethod(), thirdMethod()]).then((data) => {
    console.log("Success:", data);
}).catch(eMsg => {
    console.error("Error:", eMsg);
});