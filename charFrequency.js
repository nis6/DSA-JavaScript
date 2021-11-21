
function charFrequency(string){
    let alphaArr={};
    for(let i=65;i<=123;i++){
        alphaArr[String.fromCharCode(i)]=0;
    }
    for(let j=0;j<string.length;j++){
        ++alphaArr[string.charAt(j)];
    }
    let freq=Object.entries(alphaArr).filter(([key,value])=>alphaArr[key]>0);
    console.log(freq);
}

charFrequency("Nishaaa");
	
