var maxSubArray = function(nums) {
    let max_sum=nums[0];
    let current_sum=max_sum;
    let start=0;
    let end=0;
    for(let i=1;i<nums.length;i++){
      if(nums[i]>max_sum && nums[i]>nums[i]+current_sum )   //when current index number is greater than max sum as well as total sum so far(included)
        start=i;
      current_sum=Math.max(nums[i]+current_sum,nums[i]);
      if(current_sum>max_sum)
          end=i; 
      max_sum=Math.max(max_sum,current_sum);
      }
  let sub=nums.slice(start,end+1);
  return {sub,max_sum};
};

console.log(maxSubArray([-5,4,-1,7,-8,8]));

/*NOTES
start and end variables to keep track of the final subarray
sliding window from index 0
but keep track of previous subarray using current_sum - DP approach storing the subproblem solutions 
Results in 
{ sub: [ 7 ], max_sum: 10 }
without consitidion nums[i]>nums[i]+current_sum line 7
*/ 