// /*
// Part 1 Kyle McVeigh (solo)
// 
// Write an Array uniq  - should not modify
// Array twosum 
// Array Transpose - should not modify 
// */
// 
// //test simple output
// function hello() {
//   console.log("Hello");
// }
// 
// //test simple function 
// function sum (arr) { 
//   arrlength = arr.length;
//   let answer = 0;
//   for(let i = 0; i < arrlength ; i++){
//     answer += arr[i]; 
//   }
//   return answer;
// }
// 
// Array.prototype.myUniq = function() {
//   let answer = []; 
//   let originalLength = this.length;
// 
//   for(let i = 0; i < originalLength; i++){
//     if(!answer.includes(this[i])){
//       answer.push(this[i]); 
//     }
//   }
//   return answer;
// };
// 
// const arr = [1,2,3,4,3,1];
// console.log(arr.myUniq());
// 
// 
// Array.prototype.twosum = function(){
//   let answer = [];
//   let originalLength = this.length;
// 
//   for(let i = 0; i < originalLength; i++){
//     for(let k = i+1; k < originalLength; k++ ){
//       if(this[i] + this[k] === 0){ 
//         answer.push(i);
//         answer.push(k);
//       }
//     }
//   }
//   return answer;
// };
// 
// const arr2 = [1,-1,4,8,-3,2,4,0,2,-3];
// console.log(arr2.twosum());
// 
// 
// // Array.prototype.transpose = function(){
// //   let answerWidth = this.length;
// //   let answerHeight = this[0].length;
// //   let answer = new Array(answerWidth);
// //   for(let i = 0; i < answerHeight; i++){
// //     for(let k = 0; k < answerWidth; k++) {
// //       answer[k][i] = this[i][k];
// //     }
// //   }
// //   return answer;
// // };
// // 
// // const quest = new Array(2);
// // quest[0] = new Array(3);
// // quest[1] = new Array(3);
// // quest[0][0] = 1;
// // quest[0][1] = 2;
// // quest[0][2] = 3;
// // quest[1][0] = 4;
// // quest[1][1] = 5;
// // quest[1][2] = 6;
// // 
// // console.log(quest.transpose());
