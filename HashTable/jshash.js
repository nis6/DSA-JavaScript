class Hashtable{
    constructor(table={}){
        this.maxsize=127;
        this.table=this.insert_obj(table);  
    }

    //when key is a number
    _hash_arr(key){
        return key%this.maxsize;
    }
    //when key is a string
    _has_associative_arr(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%this.maxsize; //to keep the hash value less than bucket size
    }
    //final hash function
    _hash(key){
        if(typeof key === 'number')
        return this._hash_arr(key);
        else if(typeof key == 'string')
        return this._has_associative_arr(key);
    }
    //value itself is key, if you want to use seperate key value then use direct 
    insert_array(arr){
        for(let i=0;i<arr.length;i++){
            this.insert(arr[i],arr[i]);
        }
    }
    insert_obj(obj){
        for(let i in obj){
            this.insert(i,obj[i]);
        }
    }

    //insert into hash table
    insert(key,val){
        let index=this._hash(key);
        while(this.table[index]!=undefined)
           { index=this._hash(index+1);} 
        this.table[index]=val;
    }
    //search a key for value and value for key
    search(key,val){
        if(arguments[0]){
            let index=this._hash(key);
            while(this.table[index]!=undefined){
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
            while(this.table[index]!=undefined){
                if(this.table[index]==val){
                    delete this.table[index];
                    return ("deleted index: "+index);
                }
                else index=this._hash(index+1); 
            }
            return "key doesn't exist"
        }
        else{
            let values=Object.values(this.table);       //
            if(values.includes(val)){                  //redundant code, for function ref tho
                for(let i in this.table){
                    if(this.table[i]==val){
                        delete this.table[i];
                        return ("deleted index: "+i);
                    //return ret;
                   
                }
                }
            }
            return "value doesn't exist";
        }    
    }

}

// let car = {type:"Fiat", model:"500", color:"white"};
// ht.insert('price',100000);
// console.log(ht);
let obj=[43,65,23,78,89,44,23,12]
let ht = new Hashtable();
ht.insert_array(obj);
console.log(ht);