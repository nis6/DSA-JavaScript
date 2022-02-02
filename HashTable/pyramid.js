function pyramid(level){
    for(let i=1;i<=level;i++){
    let a= '';
    for(let j=0;j<Math.ceil(level-i);j++) a+=' '
    for(let k=0;k<(2*i-1);k++) a+='*'
    console.log(a)
  }
}

pyramid(20)