function defineFirstArg(func, arg) {
  function funct(...args) {
    let temp = func(arg, args[0]);
    return temp;
  }
  return funct;
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5));
