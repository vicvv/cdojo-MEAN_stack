class  BinaryHeap{
    constructor(){
      this.heap = [30, 20, 10, 7, 9, 5]
    }   
     insert(value){  
      this.heap.push(value)
    this.bubbleUp();
    }
  
    //using iterative approach
       bubbleUp(){
         let index =  this.heap.length-1;
  
      while( index > 0){
         let element = this.heap[index],
        parentIndex = Math.floor((index-1)/2),
        parent = this.heap[parentIndex];

         if(parent >= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex
  
      }
    }
    
    extractMax(){
      const max = this.heap[0];
      this.heap[0]= this.heap.pop()
      this.sinkDown(0)
      return max
    }
    
   sinkDown(index){
       
       let   left = 2*index+1,
             right = 2*index+2,
             largest = index;
       const length = this.heap.length
      
   
       
        if(left <= length &&  this.heap[left]>this.heap[largest] ){
           largest = left
         }
        if(right <= length && this.heap[right]>this.heap[largest]) {
          largest = right
        }
       // swap
       if(largest !== index){
          [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
         this.sinkDown(largest)
       }
      } 
   
  }
  
  
  
  //mocha.setup('bdd');
  
  
  //var assert = chai.assert;
  
  describe('Heaps(Binary heap)',()=>{
    
    it("should add insert a new node to the heap",()=>{
      
       const heap = new BinaryHeap();
       heap.insert(90)
       heap.insert(49)
     
       assert.deepEqual([90, 49, 30, 20, 9, 5, 10, 7],heap.heap)
    
    })
  
    it("should  remove a max node from the heap",()=>{
       const heap = new BinaryHeap();
       assert.equal(30,heap.extractMax())
      console.log(heap)
       assert.deepEqual([20, 9, 10, 7, 5],heap.heap)
    })
    
  })
  
  
  
  //mocha.run()