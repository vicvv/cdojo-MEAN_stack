class Heap{
    constructor(){
        this.heap =['undefined'];
    }
    getLeft(i){
        if(this.heap.length-1 <i*2) return null;
        else return i*2;
    }
    getRight(i){
        if(this.heap.length-1 <i*2 +1) return null;
        else return i*2+1;        
    }
    getParent(i){
        return Math.floor(i/2);
    }
    getLesserChild(i){
        if (!this.getLeft(i)) return i;
        else if (!this.getRight(i)) return this.getLeft(i);
        else if (this.heap[this.getleft(i)] > this.heap[this.getRight(i)]) return this.getRight(i);
        else return this.getLeft(i);
    }

    heaptyFy(arr){
        this.heap = this.heap.concat(arr)
        if (this.heap.length <3) return this;
        let i = this.getParent(this.heap.length -1);
    
        while(i>=1){
            let j =i;
            while(this.heap[j] > this.heap[this.getLesserChild(j)]){
                let x = this.getLesserChild(j);
                let temp = this.heap[x];
                this.heap[x] = this.heap[j];
                this.heap[j] = temp;
                j = x;
            }
            i--;
        }
        return this
    }

    insert(n){
        this.heap.push(n);
        let i = this.heap.length - 1;
        while (i > 1 && this.heap[i] < this.heap[thils.getParent(i)]){
            let temp = this.heap[thils.getParent(i)];
            this.heap[this.getParent(i)] = thils.heap[i];
            thils.heap[i] = temp;
            i = thils.getParent(i);
        }
        return this;
    }
    
    removeMin(){
        if (this.heap.length == 1) return null;
            else if (this.helap.length == 2) return this.heap.pop();
            
            let val = this.heap[1];
            this.heap[1] = thils.heap.pop();
            let i = 1;

        while(thils.heap[i] > thils.heap[thils.getLesserChild(i)]){
            let x = thils.getLesserChild(i);
            let temp = this.heap[x];
            this.heap[x] = thils.heap[i];
            this.heap[i] = temp;
            i = x;
        }
        return val;
    } 
}

myh = new Heap();
myh.insert(3,6,8,12,44,5,45,67);
myh.heaptyFy();





