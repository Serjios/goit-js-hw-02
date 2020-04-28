'use strict';

const checkForSpam = function(message) {
  const words = message.toLowerCase();
  const find = words.includes('spam') || words.includes('sale');

  return find;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
