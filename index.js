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
        const bucket = this.buckets[index];

        if(this.buckets[index]){
            for(let i = 0; i < this.buckets[index].length; i++){
                if(this.buckets[index][i].key == key){
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

}

hashMap = new HashMap;
hashMap.set(hashMap.hash('hello'), 'brother');
console.log(hashMap.length())
console.log(hashMap);
console.log(hashMap.get(hashMap.hash('hello')));
hashMap.hash('hello')
 