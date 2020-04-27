'use strict';

const checkForSpam = function(message) {
  const words = message.toLowerCase();
  const find = words.indexOf('spam') > -1 || words.indexOf('sale') > -1;

  return find;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
