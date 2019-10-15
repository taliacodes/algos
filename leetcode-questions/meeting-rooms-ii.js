const meetingRooms = () => {
  let intervals = []
  if (intervals === null || intervals.length === 0) {
    return 0
  }

  intervals.sort((a,b) => a[0] - b[0])
  //new minHeap = new PriorityQueue((a,b) => a[1] - b[1])
  minHeap.add(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]
    let earliest = minHeap.remove()
    if (current[0] >= earliest[1]) {
      earliest[1] = current[0]
    }
    else {
      minHeap.add(current)
    }
    minheap.add(earliest)
  }
  return minHeap.size()
}