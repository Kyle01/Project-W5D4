// //EXERCISE 1=======================================
// Array.prototype.bubbleSort = function(){
//   answer = this.slice(0);
//   let k = 0;
//   let temp; 
// 
//   while(!sorted(answer)) {
//     if(k > answer.length) {
//         k = 0;
//     }
//     if(answer[k] > answer[k+1]){
//       temp = answer[k+1];
//       answer[k+1] = answer[k];
//       answer[k] = temp;
//       k = 0;
//     }
// 
//     k++;
//   }
//   return answer;
// };
// 
// function sorted(arr){
//   for (let i = 0; i < arr.length-1; i++) {
//     if(arr[i] > arr[i+1]) {
//       return false;
//     }
//   }
//   return true;
// }
// 
// const arr = [1,-1,4,8,-3,2,4,0,2,-3];
// console.log(arr.bubbleSort());
// 
// //EXERCISE 2=======================================
// String.prototype.substrings = function(){
//   let answer = [];
//   let size = 3;
//   for(let k = 0; k < this.length; k++){
//     if(size + k > this.length && size < this.length){
//       size++; 
//       k = 0;
//     }
//     answer.push(this.slice(k,size));
//   }
//   return answer;
// };
// 
// const helper = "ABCD";
// console.log(helper.substrings());