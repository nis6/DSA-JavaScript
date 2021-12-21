/*
You must solve the problem without using any built-in library 
for handling large integers (such as BigInteger).
You must also not convert the inputs to integers directly.
*/
var addStrings = function (num1, num2) {
  let res = [];
  //let sum=0;
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 && j >= 0) {
    let temp =
      ((num1[i] + num2[j]) % 10) + Math.floor((num1[i] + num2[j]) / 10) + carry;
    res.unshift(temp % 10);
    carry = Math.floor(temp / 10);
    i--;
    j--;
  }
  if (j < 0 && i >= 0) {
    while (i >= 0) {
      if (carry) {
        let temp = num1[i] * 1 + carry;
        res.unshift(temp % 10);
        carry = Math.floor(temp / 10);
      } else res.unshift(num1[i]);
      i--;
    }
  } else if (i < 0 && j >= 0) {
    while (j >= 0) {
      if (carry) {
        let temp = num2[j] * 1 + carry;
        res.unshift(temp % 10);
        carry = Math.floor(temp / 10);
      } else res.unshift(num2[j]);
      j--;
    }
  }
  if (carry) {
    res.unshift("1");
  }

  return res.join("");
};

console.log(addStrings("9", "99"));
/*
NOTES:
start adding one char form each at a time-> type coercion using / or % 
always use coercion whenever using indexing,
Math.floor for integer carry
always check if carry left
*/
