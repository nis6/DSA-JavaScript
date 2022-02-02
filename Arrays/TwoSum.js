var twoSum = function(nums, target) {
  let ht={}
  for(let i in nums){
      let diff=target-nums[i];
      if(ht.hasOwnProperty(nums[i])) return [i, ht[nums[i]]];
      else ht[diff]=i;
  }
};

//Alternate Solution, -returns number rather than index -multiple pairs rather than a single one 
var twoSum = function(nums, target) {
    const hash={};
    const twoSumArr=[];
    for(let i in nums){
      let diff = target - nums[i];
      if(hash.hasOwnProperty(nums[i])){
        twoSumArr.push([nums[i],hash[nums[i]]]);
      }
      else{
        hash[diff]=nums[i];
      }
      console.log(hash);
    }
    
     return twoSumArr;
  };
console.log(twoSum([2,4,7,8,9],11));