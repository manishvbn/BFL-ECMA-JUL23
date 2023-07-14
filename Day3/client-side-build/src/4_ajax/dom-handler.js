import postApiClient from "./post-api-client";

var ajaxDiv = document.querySelector('#ajaxDiv');
var messageDiv = document.querySelector('#messageDiv');

if (ajaxDiv.style.display === "none") {
    ajaxDiv.style.display = "block";
    messageDiv.style.display = "none";
}

var button = document.createElement('button');
button.className = "btn btn-primary";
button.innerHTML = "Get Data";

var btnArea = document.querySelector('#btnArea');
btnArea.appendChild(button);

// 1. Hard Coded
// button.addEventListener('click', function () {
//     // alert('Button Clicked');

//     const data = [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         }
//     ];

//     var table = generateTable(data);
//     var tableArea = document.querySelector('#tableArea');
//     tableArea.appendChild(table);
// });

// 2. Using Callbacks
// button.addEventListener('click', function () {
//     postApiClient.getAllPostsUsingCallbacks((data) => {
//         var table = generateTable(data);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     }, function (eMsg) {
//         console.error(eMsg);
//     });
// });

// // 3. Using Promise
// button.addEventListener('click', function () {
//     postApiClient.getAllPostsUsingPromise().then((data) => {
//         var table = generateTable(data);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     }).catch(function (eMsg) {
//         console.error(eMsg);
//     });
// });

// 4. Async / Await
// button.addEventListener('click', async function () {
//     try {
//         var data = await postApiClient.getAllPostsUsingPromise();
//         var table = generateTable(data);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     } catch (err) {
//         console.error(err);
//     }
// });

// 5.1 Using Asyn Function as Promise
// button.addEventListener('click', function () {
//     postApiClient.getAllPostsAsync().then((data) => {
//         var table = generateTable(data);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     }).catch(function (eMsg) {
//         console.error(eMsg);
//     });
// });

// 5.2 Using Async Function
// button.addEventListener('click', async function () {
//     try {
//         var data = await postApiClient.getAllPostsAsync();
//         var table = generateTable(data);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     } catch (err) {
//         console.error(err);
//     }
// });

// // 6. ECMASCRIPT 2018 - Using Async Generator Function
// button.addEventListener('click', async function () {
//     var genObj = postApiClient.getAllPosts();
//     try {
//         var data = await genObj.next();
//         var table = generateTable(data.value);
//         var tableArea = document.querySelector('#tableArea');
//         tableArea.appendChild(table);
//     } catch (err) {
//         console.error(err);
//     }
// });

// 6. ECMASCRIPT 2018 - Using Async Generator Function
button.addEventListener('click', async function () {
    var genObj = postApiClient.getPosts([1, 4, 7, 88, 99]);
    let data = [];

    // ECMASCRIPT 2018 - Async Iterators
    for await (const postData of genObj) {
        data = [...data, postData];
    }

    var table = generateTable(data);
    var tableArea = document.querySelector('#tableArea');
    tableArea.appendChild(table);
});

function generateTable(data) {
    const table = document.createElement('table');
    table.className = "table table-bordered";
    const headers = Object.keys(data[0]);

    // Create header row
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const header = document.createElement('th');
        const textNode = document.createTextNode(headerText.toUpperCase());
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Create table rows
    data.forEach(obj => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const cell = document.createElement('td');
            const textNode = document.createTextNode(obj[header]);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}