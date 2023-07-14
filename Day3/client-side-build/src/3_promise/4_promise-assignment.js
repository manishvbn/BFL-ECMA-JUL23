const url = "https://jsonplaceholder.typicode.com/users";

function getUser(userId) {
    return new Promise((resolve, reject) => {
        fetch(`${url}/${userId}`).then(response => {
            response.json().then(data => {
                resolve(data);
            }).catch(err => {
                reject("Parsing Error...");
            })
        }).catch(err => {
            reject("Communication Errror...");
        });
    });
}

function getPosts(user) {
    return new Promise((resolve, reject) => {
        fetch(`${url}/${user.id}/posts`).then(response => {
            response.json().then(data => {
                resolve({ ...user, posts: data });
            }).catch(err => {
                reject("Parsing Error...");
            })
        }).catch(err => {
            reject("Communication Errror...");
        });
    });
}

getUser(1).then(getPosts).then(data => {
    console.log(data);
}).catch(eMsg => {
    console.error(eMsg);
});