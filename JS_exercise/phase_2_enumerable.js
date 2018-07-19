// //EXERCISE 1=======================================
// Array.prototype.myEach = function(callback){
//   for(let i = 0 ; i < this.length; i++){
//     this[i] = callback(this[i]);
//   }
//   return undefined; 
// };
// 
// const arr1 = [1,-1,4,8,-3,2,4,0,2,-3];
// arr1.myEach(function(el) {
//   return el * el;
// }
// );
// // console.log(arr1);
// 
// //EXERCISE 2=======================================
// Array.prototype.myMap = function(callback){
//   let answer = [];
//   for(let i = 0 ; i < this.length; i++){
//     answer.push(callback(this[i]));
//   }
//   return answer;
// };
// 
// const arr2 = [1,-1,4,8,-3,2,4,0,2,-3];
// let temp = arr2.myMap(function(el) {
//   return el * el;
// }
// );
// // console.log(temp);
// 
// //EXERCISE 3=======================================
// Array.prototype.myReduce = function(callback, el){
//   let answer = 0 ;
//   if(el){ answer = el; }
// 
//   for(let i = 0 ; i < this.length; i++){
//     answer = callback(answer, this[i]);
//   }
//   return answer;
// };
// 
// const arr3 = [1,-1,4,8,-3,2,4,0,2,-3];
// let temp2 = arr3.myReduce(function(acc, el) {
//   return acc + el;
// }, 5);
// 
// console.log(temp2);