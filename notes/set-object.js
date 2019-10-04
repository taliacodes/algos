const set1 = new Set([1,2,3,4,5])

console.log(set1.has(1)) //true

console.log(set1.has(234)) //false


set1.add(53)
set1.clear() //removes all elements from the Set object
set1.delete(3) // removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned
set1.entries()

set1.has(5) //returns a boolean asserting whether an element is present with the given value in the Set object

set1.values() //returns a new iterator that contains the values for each element in the Set object in insertion order -- to loop through these values, use a for in loop because it is an object