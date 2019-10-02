/* eslint-disable no-multiple-empty-lines */
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(val) {
    this.values.push(val);
    let childNodeIdx = this.values.length - 1;
    let parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);

    //MY ITERATIVE SOLUTION
    while (val > this.values[parentNodeIdx]) {
      let temp = this.values[parentNodeIdx];
      this.values[parentNodeIdx] = val;
      this.values[childNodeIdx] = temp;
      childNodeIdx = parentNodeIdx;
      parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);
    }

    //UDEMY SOLUTION
    // while (childNodeIdx > 0) {
    //   let parentNodeIdx = Math.floor((childNodeIdx - 1) / 2)
    //   let parent = this.values[parentNodeIdx]
    //   if (val <= parent) break;
    //   this.values[parentNodeIdx] = val
    //   this.values[childNodeIdx] = parent
    //   childNodeIdx = parentNodeIdx
    // }

    console.log(this.values);
  }
  //remove the maximum value
  extractMax() {
    //remove the root
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  //  [33, 39, 41, 18, 27, 12]
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild;
      let rightChild;

      let swap = null; //keep track of position that we're going to swap with

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

/*
                   12
                /      \
              39        33
            /    \      
          18     27      

[12, 39, 33, 18, 27]

*/

let newHeap = new MaxBinaryHeap();
// console.log(newHeap)
newHeap.extractMax();
console.log('this is after extraction', newHeap);

/*

          MAX BINARY HEAP

                   41
                /      \
              39        33
            /    \    /    \  
          18     27  12    55


      0   1   2   3   4   5   6
    [41, 39, 33, 18, 27, 12, 55]
             P           L   R

              //55 is currently the child of 33 so what we're gonig to do is check if 55 is less than or greater than 33. if it's greater than the parent, we're going to switch the child and the parent so it becomes:

      0   1   2   3   4   5   6    
    [41, 39, 55, 18, 27, 12, 33]
     P   L   R
              //55 is currently the child of 41 so we check if 55 is less than or greater than 41. It's greater than so we are going to switch the child and the parent so it becomes:

      0   1   2   3   4   5   6    
    [55, 39, 41, 18, 27, 12, 33]

          MAX BINARY HEAP

                   55
                /      \
              39        41
            /    \    /    \  
          18     27  12    33

*/
