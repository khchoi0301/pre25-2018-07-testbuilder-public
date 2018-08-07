// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  if((cardNumber.substring(0,2)==='38' || cardNumber.substring(0,2)==='39') && cardNumber.length === 14){
    return 'Diner\'s Club';
  } else if ((cardNumber.substring(0,2)==='34' || cardNumber.substring(0,2)==='37') && cardNumber.length === 15) {
    return 'American Express';
  } else if (cardNumber.substring(0,1)==='4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return 'Visa';
  } else if ((cardNumber.substring(0,2)==='51' || cardNumber.substring(0,2)==='52'|| cardNumber.substring(0,2)==='53'|| cardNumber.substring(0,2)==='54'|| cardNumber.substring(0,2)==='55') && cardNumber.length === 16){
    return 'MasterCard';
  }



  
/*  
  Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
*/
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
