let name = "anuj "
let score = 45

console.log(name+score);

console.log(`hello my name is ${name} my score is ${score}`);

console.log(name[0]);



const realname=new String("keshav")
console.log(realname[2]);

console.log(realname.length);
console.log(realname.__proto__);
console.log(realname.charAt(4));
console.log(realname.indexOf('h'));

const newname= realname.substring(0, 4)
console.log(newname);

const fakename = realname.slice(-5, 3)
console.log(fakename);

const url = "https://anuj/anuj%30sony"

console.log(url.replace('%30','-'));