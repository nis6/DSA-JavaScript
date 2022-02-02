function censor() {
  let obj = {};
  function func(...args) {
    if (args[1]) {
      obj[args[0]] = args[1];
    } else {
      let temp = args[0].split(/.| /);
      console.log(obj);
      console.log(temp);
      for (let i in temp) {
        if (Object.keys(obj).includes(temp[i])) {
          temp[i] = obj[temp[i]] + ",";
          console.log(obj[temp[i]]);
        }
      }
      return temp.join(" ");
    }
  }
  return func;
}
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs."));
