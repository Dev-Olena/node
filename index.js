const app = require('./app')
const http = require('http');

const PORT = 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
   console.log(`App started on port ${PORT}`)
});







// const users = new Map();

// function signIn (userObj) {
//    users.set(userObj.email, userObj);
// }

// function getListUsers() {
//    return [...users.values()]
// }
// function requestListener(request, response) {
//    console.log(request.url, request.method);
//    if(request.method === 'GET') {
//       if(request.url === '/') {
//          response.statusCode = 200;
//          response.statusMessage = 'OK';
//          response.end('Hello, world!');
//         } else if (request.url === '/about') {
//          response.statusCode = 200;
//          response.statusMessage = 'OK';
//          response.end('This is our page')
//         } else if (request.url === '/users') {
//          response.statusCode = 200;
//          response.statusMessage = 'OK';
//          const usersList = getListUsers();
//          response.end(JSON.stringify(usersList));
//         }else {
//          response.statusCode = 404;
//          response.statusMessage = 'Not found';
//          response.end('this page not found');
//         }
//    }

//    if(request.method === 'POST') {
//       if(request.url === '/') {
//          response.statusCode = 400;
//          response.statusMessage = 'Forbidden';
//          response.end('This page has not suport this operation');
//       } else if (request.url ==='/users') {
//          let string = '';
//          request.on('data', (chunk) => {
//             string += chunk;
//          });
//          request.on('end', () => {
//             const userObj = JSON.parse(string);
//             signIn(userObj);
//             response.statusCode = 201;
//             response.statusMessage = 'Created';
//             response.end(`${userObj.username} ${userObj.lastname} ви зареєстровані в системі`)
//          })
//       } else {
//          response.statusCode = 404;
//          response.statusMessage = 'Not found';
//          response.end('this page not found');
//       }
//    }
   
// }

