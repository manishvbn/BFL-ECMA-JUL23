const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    getAllPostsUsingCallbacks: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(err => {
                errorCB("Parsing Error...");
            })
        }).catch(err => {
            errorCB("Communication Errror...");
        });
    },

    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("Parsing Error...");
                })
            }).catch(err => {
                reject("Communication Errror...");
            });
        });
    },

    getAllPostsAsync: async function () {
        try {
            var response = await fetch(url);
            var data = await response.json();
            return data;
        } catch (err) {
            throw err;
        }
    },

    getAllPosts: async function* () {
        try {
            var response = await fetch(url);
            var data = await response.json();
            yield data;
        } catch (err) {
            throw err;
        }
    },

    getPosts: async function* (posts) {
        for (let i = 0; i < posts.length; i++) {
            const postId = posts[i];
            const response = await fetch(`${url}/${postId}`);
            var data = await response.json();
            yield data;
        }
    }
};

export default postApiClient;