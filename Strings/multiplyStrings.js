var multiply = function (num1, num2) {
  num1.length > num2.length ? null : ([num1, num2] = [num2, num1]);
  let ht = {};
  for (let i = num2.length - 1; i >= 0; i--) {
    ht[num2[i]] = [];
    for (let j = 0; j < num2.length - i - 1; j++) ht[num2[i]].unshift(0);
  }
  let j = num2.length - 1;
  while (j >= 0) {
    let i = num1.length - 1;
    let temp = 0;
    let carry = 0;
    while (i >= 0) {
      temp = num1[i] * num2[j] + carry;
      carry = Math.floor(temp / 10);
      ht[num2[j]].unshift(temp % 10);
      i--;
    }
    if (carry) ht[num2[j]].unshift(carry);
    j--;
  }
  let sum = 0;
  for (i in ht) {
    sum += ht[i].join("") * 1;
  }
  return "" + sum;
};

console.log(multiply("999", "999"));
