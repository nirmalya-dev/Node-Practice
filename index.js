const os = require('os')
const testmodule= require('./module')
console.log(os.arch());
testmodule();
console.log(process.argv);