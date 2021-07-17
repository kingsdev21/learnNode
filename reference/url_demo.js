const url = require('url');
const myUrl = new URL('http://google.com/hello.html?id=100&status=active');

//Serialize url
console.log(myUrl.href);
console.log(myUrl.toString())

//Get the url host. host include port number
console.log(myUrl.host);

//hostname doesnot include the port number
console.log(myUrl.hostname);

//PATHNAME
console.log(myUrl.pathname);

//Serialised query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams);

//Add params(querystrings) dynamically to the url
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//You can also loop through the querystring or params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));

