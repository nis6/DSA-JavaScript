function dateStamp(func) {
  function funct(...args) {
    //let date = new Date();
    return {
      date: new Date().getDate(),
      output: func(...args),
    };
  }
  return funct;
}
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6));
