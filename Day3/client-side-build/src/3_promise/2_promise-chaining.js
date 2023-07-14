function firstMethod() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('first method completed...');
            resolve({ first: 'added from first method' });
        }, 2000);
    });
    return promise;
}

function secondMethod(inputData) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('second method completed...');
            resolve({ ...inputData, second: 'added from second method' });
            // reject("Error from 2nd Method");
            // throw new Error("Error from 2nd Method");
        }, 3000);
    });
    return promise;
}

function thirdMethod(inputData) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('third method completed...');
            resolve({ ...inputData, third: 'added from third method' });
        }, 1000);
    });
    return promise;
}

firstMethod().then(secondMethod).then(thirdMethod).then((data) => {
    console.log(data);
}).catch(eMsg => {
    console.error(eMsg);
});