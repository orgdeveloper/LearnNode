// const path = require("path");

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
//
//
// console.log(dirUploads);

// const util = require("util");

// util.log(path.basename(__filename));
// util.log('^^^ Name of current file');

// const v8 = require('v8');
//
// util.log(v8.getHeapStatistics());




const { log } = require("util");
const { getHeapStatistics} = require('v8');

log(getHeapStatistics());
