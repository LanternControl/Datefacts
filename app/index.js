const chalk = require('chalk');
let moment = require('moment');
moment().format();

//ty lyman for the help here
let mmt = moment();

let now = chalk.blue(moment().format("dddd, MMMM Do YYYY, hh:mm:ss A"));

console.log("It is " + now);

let now1 = chalk.red(moment().format("DDD"));

console.log("It is the " + now1 + " day of the year.");
let secondsInDay = mmt.diff(moment().hour(0).minute(0).second(0),"seconds");
let now2 = chalk.blue(moment().format("sssss"));

console.log("It is the " + secondsInDay + " seconds into the day.")
