// // function anuj(){
// //     console.log("A");
// //     console.log("n");
// //     console.log("u");
// //     console.log("j");
// // }
// // anuj()

// function addTwoNumber(a, b){
//     let result = a+b
//     return result
// }
// const result = addTwoNumber(55,45)
// console.log("result: ", result);


function userLog(username){
    if (!username){
        console.log("please enter yout name ");
        return
    }
    return `${username} just logged in `
}
//console.log(userLog("anuj"));
console.log(userLog("anuj"));
