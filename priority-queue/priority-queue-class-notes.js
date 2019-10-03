//things are being served/worked on in an order and each element has a priority

//priority queues are separate from heaps (they are an abstract concept)

//you can implement a priority queue as an array, it would just be slower

//a naive version --

/* using a list to store all elements

priority: 3 priority: 1 priority: 2 priority: 5 priority: 4

you can iterate over the list to find the highest priority element

a lower number typically denotes a higher priority

THIS IS O(N) but every time you need to find the next highest priority, you'll have to go through every single item on the list again

all that we care about is the minimum or maximum thing

insertion and removal have a time complexity of O(log(n))

*/