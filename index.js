class HashMap {
    constructor(){
        this.buckets = new Array(16);
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }    
    set(key, value){
        const index = this.hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = []
        }
        this.buckets[index].push({key, value})
    }
    get(key){
        const index = this.hash(key);
        if(this.buckets[index]){
            for(let i = 0; i < this.buckets[index].length; i++){
                if(this.buckets[index][i].key === key){
                    return this.buckets[index][i].value;
                }
            }
        }
        return null;
    }
    has(key){
        const index = this.hash(key);
        if(this.buckets[index]){
           return true;
        }
        return false;
    }
    remove(key){
        const index = this.hash(key);
        if(this.buckets[index]){
           for(let i = 0; i < this.buckets[index].length; i++){
                if(this.buckets[index][i].key === key){
                    this.buckets[index].splice(i, 1);
                    return true;
                }
           }
        }
        return false;
    }
    length(){
        let count = 0;
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                count++
            }
        }
        return count;
    }
    clear(){
       this.buckets.splice(0, this.buckets.length)
    }
    keys(){
        let keys = [];
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                for(let j = 0; j< this.buckets[i].length; j++){
                    keys.push(this.buckets[i][j].key)
                }
            }
        }
        return keys;
    } 
    values(){
        let values = [];
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                for(let j = 0; j< this.buckets[i].length; j++){
                    values.push(this.buckets[i][j].value)
                }
            }
        }
        return values;
    }
    entries(){
        let entries = [];
        for(let i = 0; i < this.buckets.length; i++){
            if(this.buckets[i]){
                for(let j = 0; j< this.buckets[i].length; j++){
                    entries.push(this.buckets[i][j])
                }
            }
        }
        return entries;
    }
}

hashMap = new HashMap;
hashMap.set(hashMap.hash('hello'), 'brother');
console.log(hashMap.length())
console.log(hashMap);
console.log(hashMap.get(hashMap.hash('hello')));
hashMap.set(hashMap.hash('kanye'), 'west');
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
hashMap.clear();
console.log(hashMap);