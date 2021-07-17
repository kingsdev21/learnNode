//Gets all the information about the operating system

const os = require('os');

//Gets the platform of the current operating system

console.log(os.platform());

//Gets cpu architecture
console.log(os.arch());

//Gets the CPU info
console.log(os.cpus());

//Free Memory
console.log(os.freemem());

//Total Memory
console.log(os.totalmem());

//Gets Home Directory
console.log(os.homedir());

//Gets hostname
console.log(os.hostname());

//Gets the system uptime
console.log(os.uptime());
