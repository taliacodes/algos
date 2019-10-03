class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}


class PriorityQueue {
  constructor() {
    this.values = [{val: 'drunk', priority: 3}]
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)

    this.values.push(newNode)
    let childNodeIdx = this.values.length - 1
    let parentNodeIdx = Math.floor((childNodeIdx - 1) / 2)
    console.log('this is the values at prtidx', this.values[parentNodeIdx].priority)

    while (newNode.priority < this.values[parentNodeIdx].priority) {
      let temp = this.values[parentNodeIdx];
      this.values[parentNodeIdx] = newNode;
      this.values[childNodeIdx] = temp;
      childNodeIdx = parentNodeIdx;
      parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);
    }
  }

}


let pq = new PriorityQueue()

pq.enqueue('headache', 4)
pq.enqueue('tired', 5)
pq.enqueue('cancer', 1)
pq.enqueue('broken leg', 2)

console.log(pq)


// insert(val) {
//   this.values.push(val);
//   let childNodeIdx = this.values.length - 1;
//   let parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);

//   //MY ITERATIVE SOLUTION
//   while (val > this.values[parentNodeIdx]) {
//     let temp = this.values[parentNodeIdx];
//     this.values[parentNodeIdx] = val;
//     this.values[childNodeIdx] = temp;
//     childNodeIdx = parentNodeIdx;
//     parentNodeIdx = Math.floor((childNodeIdx - 1) / 2);
//   }
