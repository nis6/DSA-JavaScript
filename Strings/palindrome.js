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
