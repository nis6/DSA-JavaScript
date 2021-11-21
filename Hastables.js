class Hashtable{
    constructor(){
        this.table={};
        this.size=20;
        //this.slots=0;
    }

    hash_function(key){
        return key%this.size;
    }
    
    insert(key,val){
        let hash=this.hash_function(key);
        while(this.table[hash]!=undefined){
            hash=this.hash_function(hash+1); 
        }
        this.table[hash]=val;
    }

    search(key,val){
        let hash=this.hash_function(key);
        while(this.table[hash]!=val && this.table[hash]!="")
        {hash=this.hash_function(hash+1)}
        if(this.table[hash]==val)
            return val;
        else
            return false;
   }
}

nums1=[9,4,9,8,4];
nums2=[4,9,5];
let ht=new Hashtable();
for(let i=0;i<nums1.length;i++)
{
    ht.insert(nums1[i],nums1[i]);
}
let result=[];
for(let i=0;i<nums2.length;i++){
    if(ht.hasOwnProperty(ht.hash_function(nums2[i])))
        result.push(nums2[i]);
}
console.log(result);