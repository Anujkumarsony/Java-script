// //non singalton object



// const mySym=Symbol("key1")


// const JsUser={
//     name: "anuj",
//     roll_no: 2021,
//     email: "anujsony@google.com",
//     "full name": "anuj kumar sony",
//     [mySym]:"key23"
// }
// // console.log(JsUser.name); // it is 1st rule for print object
// // console.log(JsUser["full name"]); // it is best way to print object
// // //console.log(JsUser.full name);  //this is wrong way to pring full name 
// // console.log(JsUser["full name"]);
// // console.log(typeof JsUser[mySym]);

// // JsUser.email="anujlsdkhgfk@gmail.com"
// // console.log(JsUser.email);
// // Object.freeze(JsUser)
// // JsUser.email="anuj@gmail.com"
// // console.log(JsUser);

// JsUser.greet=function(){
//     console.log("hello i am anuj");
// }

// JsUser.greetTwo=function(){
//     console.log(`hello i am anuj and my email is this ${this.email}`);
// }
// console.log(JsUser.greet());
// console.log(JsUser.greetTwo());


/*de-structure
const Data ={
    Name:"anuj",
    sysId:121,
    add:"bihar"
}

const{Name,sysId}=Data
console.log(Name);
console.log(sysId);
*/


/*json creatioon

{
    "name":"anuj",
    "sysId":2021,
}
*/