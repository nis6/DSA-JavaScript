class Hashtable{
    constructor(){
        this.table={};
        this.maxsize=127;
    }
    //when key is a number
    _hash_arr(key){
        return key%this.maxsize;
    }
    //when key is a string
    _has_associative_arr(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key[i];
        }
        return hash>this.maxsize; //to keep the hash value less than bucket size
    }
    //final hash function
    _hash(key){
        if(typeof key === 'number')
        return this._hash_arr(key);
        else if(typeof key === 'string')
        return this._has_associative_arr(key);
    }
    //value itself is key, if you want to use seperate key value then use direct 
    insert_array(arr){
        for(let i=0;i<nums1.length;i++){
            this.insert(arr[i],arr[i]);
        }
    }
    insert_obj(obj){
        this.table=obj;
    }

    //insert into hash table
    insert(key,val){
        let index=this._hash(key);
        while(this.table[index]!=undefined && index>this.maxsize)
            index=this._hash(index+1); 
        this.table[index]=val;
    }
    //search a key for value and value for key
    search(key,val){
        if(arguments[0]){
            let index=this._hash(key);
            while(this.table[index]!=undefined && index>this.maxsize){
                if(this.table[index]) return this.table[index];
                index=this._hash(index+1); 
            }
        }
        else{
            let values=Object.values(this.table);
            if(values.includes(val)) return Object.keys(this.table)[values.indexOf(val)];
        }        
    }
    //delete for any given key or value pass undefined for unknown
    dlt(key,val){
        if(arguments[0]){
            let index=this._hash(key);
            while(this.table[index]!=undefined && index>this.maxsize){
                if(this.table[index]==val){
                    delete this.table[index];
                    return "deleted"
                }
                else index=this._hash(index+1); 
            }
            return "key doesn't exist"
        }
        else{
            let values=Object.values(this.table);       //
            if(values.includes(val)){                  //redundant code, for function ref tho
                for(let i in this.table){
                    if(this.table[i]==val)
                    {delete this.table[i];
                    return "deleted"; }
                }
            }
            return "value doesn't exist";
        }    
    }
}

nums1=[932,474,921,812,114];

let ht=new Hashtable();

ht.insert_array(nums1);

console.log(ht.search(undefined,932));
console.log(ht.table);