// // 01. Write a program to greet a pearson given their first and last name
// let firstName = "Sevanth";
// let LastName = "Rao";

// console.log ("First Name = " + firstName + " Last Name  = " + LastName);

// // 02. Write a program that greets a person based on their gender.(if else)
// let gender = "Male";
// if (gender == "Female"){
//     console.log("Gender is Female")
// } else {
//     console.log("Gender is Male")
// }

// // 03. Write a program that counts from 0-1000 and prints (for loops)
// for (let count = 0; count <= 1000; count++) {
//     console.log (count)
// }

// // 04. Write a program to prints all the even numbers in an array
// arr = [2,3,4,5,6,7,8,9];
// arrLength = arr.length
// for (let i = 0; i<= arrLength; i++) {
//     if (arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// }

// // 05. Write a program to print the biggest number in an array
// arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let biggestNumber = arr[0];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > biggestNumber) {
//     biggestNumber = arr[i];
//   }
// }
// console.log(biggestNumber);

// // 06. Write a program that prints all the male people's first name given a complex object
// let users = [{
//     firstName : "Sevanth",
//     gender : "Male"
// },{
//     firstName : "Roshan",
//     gender : "Male"
// }, {
//     firstName : "Prapthi",
//     gender : "Female"
// }]
// for (let i = 0; i < users.length; i++ ) {
//     if (users[i]["gender"] == "Male"){
//         console.log(users[i]["firstName"])
//     }
// }

// // 07. Write a program that reverse all the elements of an array
// arr = [2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }