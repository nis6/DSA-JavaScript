var maxSubArray = function(nums) {
    let max_sum=nums[0];
    let current_sum=max_sum;
    let start=0;
    let end=0;
    for(let i=1;i<nums.length;i++){
      if(nums[i]>max_sum && nums[i]>current_sum+nums[i])
        start=i;
      current_sum=Math.max(nums[i]+current_sum,nums[i]);
      if(current_sum>max_sum)
          end=i; 
      max_sum=Math.max(max_sum,current_sum);
        
      }
  let sub=nums.slice(start,end+1);
  return {sub,max_sum};
};

console.log(maxSubArray([5,4,-1,7,8]));