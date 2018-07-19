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
  if(arr.length === 1){ 
    return arr[0];
  }
  return sumRec(arr.slice(1,arr.length-1) + arr[0]);
}

console.log(sumRec([1,2,3,4]));

//EXERCISE 3=======================================
function exponent(base, exp) {
  
}

//EXERCISE 4=======================================
function fibonacci(n) {
  
}

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

