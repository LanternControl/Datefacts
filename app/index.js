const chalk = require('chalk');
let moment = require('moment');
moment().format();

//ty lyman for the help here
let mmt = moment();

let now = chalk.blue(moment().format("dddd, MMMM Do YYYY, hh:mm:ss A"));

console.log("It is " + now);

let now1 = chalk.magenta(moment().format("DDD"));

console.log("It is the " + now1 + " day of the year.");

let secondsInDay = chalk.blueBright(mmt.diff(moment().hour(0).minute(0).second(0),"seconds"));

console.log("It is " + secondsInDay + " seconds into the day.")

let savings = (moment().isDST());

if(moment().isDST() === true) {
  savings = chalk.green("is");
} else {
  savings = chalk.green("isn't");
}

console.log("It " + savings + " during Daylight Savings Time.");
