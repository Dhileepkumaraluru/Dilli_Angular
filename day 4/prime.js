/*
const numbers = [1, 2, 3, 4, 5, 7, 10, 11];
const isPrime = function(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers); // [2, 3, 5, 7, 11]
*/
const numbers=[1,2,3,4,5,6,7,8,9]
const primenumber=function(num){
    if (num<=1){
        return false;
    }
    for(let x in num){
        if(num%x==0){
            return false;
        }
    }
    return true;

};
const primeNumbers = numbers.filter(Primenumber);

console.log(primeNumbers);