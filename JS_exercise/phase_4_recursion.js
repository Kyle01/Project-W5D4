 //EXERCISE 1=======================================
function range(start, end){
  if(start === end){
    return [start];
  }
  return range(start,end-1).concat(end);
}

//console.log(range(1,9));

//EXERCISE 2=======================================
function sumRec(arr) {
  if(arr.length <= 1){ 
    return arr[0];
  }
  let x = sumRec(arr.slice(1,arr.length)) + arr[0];
  return x;
}

// console.log(sumRec([1,2,3,4]));

//EXERCISE 3=======================================
function exponent(base, exp) {
  if(exp === 1) { 
    return base;
  }
  return base * exponent(base, exp-1);
}

// console.log(exponent(5,3));

//EXERCISE 4=======================================
function fibonacci(n) {
  if(n === 1){
    return [1]; 
  }
  else if (n === 2) {
    return [1,1];
  }
  else if(n === 3) {
    return fibonacci(n-1).concat(fibonacci(n-2)[fibonacci(n-2).length-1] + fibonacci(n-3)[fibonacci(n-3).length-1]);
  }
}

console.log(fibonacci(10));

//EXERCISE 5=======================================
function deepDup(arr) {
  
}

//EXERCISE 6=======================================
function bsearch(arr, target) {
  
}

//EXERCISE 7=======================================
function mergesort(arr) {
  
}

//EXERCISE 8=======================================
function mergesort(arr) {
  
}

//EXERCISE 8=======================================
function subsets(arr) {
  
}

