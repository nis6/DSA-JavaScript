function palindrome(string) {
  let st = string.toLowerCase();
  let inarr = st.split("");
  let inarrcopy = st.split("");
  let outarr = [];
  for (let i = 0; i < st.length; i++) {
    outarr.push(inarrcopy.pop());
  }
  let ins = inarr.join("");
  let outs = outarr.join("");
  return ins == outs;
}
function solution(s) {
  let largest = "";
  let endIndex = 0;
  for (let j = 1; j < s.length; j++) {
    let sub = s.substring(0, j);
    if (palindrome(sub) && sub.length > largest.length) {
      largest = sub;
      endIndex = j;
    }
  }
  if (endIndex == 1) {
    return s;
  } else {
    solution(s.substring(endIndex));
  }
}
console.log(solution("codedoc"));
