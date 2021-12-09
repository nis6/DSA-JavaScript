var merge = function(nums1, m, nums2, n) {
    const arr=[];
    let p=0;
    let q=0;
    for(let i=0; i<(m+n); i++){
        if(p<m  && nums1[i]<=nums2[q] ){
            p++;
        }
        else if(q<n){
           nums1.splice(i,0,nums2[q])
            q++;
        }
    }
    nums1.splice(m+n);
};



/*
Pass by reference in JS 
Arrays and obj are passed by reference, a link to the memory location of literal, 
arrays and obj can be mutated in place as long as that link is kept intact like only array/obj manipulation methods are applied
but as soon as a new literal is assigned, that link between the passed variable [nums1 here] and the original array breaks
eg. instead of using nums1.splice I used nums1=arr 
and now nums1 points to this newly assigned location and value of nums1 outside of this function stays same.


*/

/*
Test Cases: 
----inp-1
[1,2,3,0,0,0]
3
[2,5,6]
3
----inp-2
[4,5,6,0,0,0]
3
[1,2,3]
3
*/