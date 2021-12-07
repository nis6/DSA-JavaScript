var intersect = function(nums1, nums2) {
    (nums1.length<nums2.length)?[nums1,nums2]=[nums2,nums1]:{}
   
   let intersection=[];
   let hashtable={};
   
   for(let i of nums1){
       if(!hashtable.hasOwnProperty(i)){
           hashtable[i]=[i];
       }
       else{
           hashtable[i].push(i);
       }
   }
   for(let i of nums2){
       if(hashtable.hasOwnProperty(i)){
           intersection.push(i);
           hashtable[i].pop();
           if(hashtable[i]==[]) delete hashtable[i];
       }
   }
   return intersection;
};



console.log(intersect([1,2],[1,1]))