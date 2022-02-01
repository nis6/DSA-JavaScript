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
    }
     return twoSumArr;
  };
  
console.log(twoSum([2,4,7,8,9],11));