const d = new Date();
console.log(d);
console.log(`Today's day : ${d.getDay()}`);
console.log(`Today's date : ${d.getDate()}`);
console.log(`Current month : ${d.getMonth() + 1}`); //~ Add 1 to getMonth() as it returns 0 based result
console.log(`Current year : ${d.getFullYear()}`);
console.log(`Hours passed today : ${d.getHours()}`);
console.log(`Minutes passed this hour : ${d.getMinutes()}`);
console.log(`Seconds passed this minute : ${d.getSeconds()}`);
console.log(`Milliseconds passed this second : ${d.getMilliseconds()}`);
// Similarly we can get UTC time. We can also set time and UTC time

console.log(`toString() : ${d.toString()}`);
console.log(`toDateString() : ${d.toDateString()}`);
console.log(`toTimeString() : ${d.toTimeString()}`);
console.log(`toUTCString() : ${d.toUTCString()}`);
console.log(`toLocaleDateString() : ${d.toLocaleDateString()}`);
console.log(`toLocaleTimeString() : ${d.toLocaleTimeString()}`);
console.log(`toISOString() : ${d.toISOString()}`);

console.log(`Number of ms passed since Jan 01, 1970 UTC : ${d.getTime()}`);
console.log(`Difference in minutes v/s UTC : ${d.getTimezoneOffset()}`);
