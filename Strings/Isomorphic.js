var isIsomorphic = function(s, t) {
    let ht={};
    let bool=false;
    for(let i in s){
        if(ht.hasOwnProperty(s[i]) && ht[s[i]]==t[i])
            bool=true
        else if(!ht.hasOwnProperty(s[i]) && !Object.values(ht).includes(t[i]) )
            { ht[s[i]]=t[i];
             bool=true; }
        else
            return false
    }
    return bool;
};


console.log(isIsomorphic("leet","code"));
console.log(isIsomorphic("bacd","baba"))

/*
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
NOTE: it is not two way relation.
https://leetcode.com/problems/isomorphic-strings/submissions/
*/

