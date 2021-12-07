/*function maxmin(arr){
    let max=0;
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return [max,min]
}*/

function maxmin2(arr){
    max=Math.max(...arr);
    min=Math.min(...arr);
    return [max,min];
}

console.log(maxmin2([89,0,43,54,12,43,121,90]));