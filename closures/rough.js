class myclass {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    console.log("this inside method: " + this);
    const add = () => {
      console.log("this inside methode function: " + this);
      this.score++;
    };
    add();
  }
  handler() {
    return {
      one: () => {
        return this.score + 1;
      },
      two: function () {
        console.log(this);
        return this.score + 2;
      },
    };
  }
}

let obj = new myclass("nisha", 30);
let ones = obj.handler();
//console.log(ones.two());

//console.log(obj.score);
