/////ALGORITHM PATTERNS & NOTES//////

// 1. you can use methods to make life easier as long as you know the time complexity of them

// 2. for binary search trees, if you notice that they are asking you to traverse from root-to-leaf, you are probably using a dfs function -- try to set up that function so it does most of the heavy lifting -- think about the parameters that will be changing inside the function

// 3. whenever you see the word "minimizes" in a problem like Minimum Path Sum, it's possible the problem has to do with Dynamic Programming

// 4. JavaScript's new Set().has is not necessarily O(1). Use a hash table to store vowels instead if you ever need to remove/reverse, etc... {a: true, e: true...etc}

//5. Using things like .substring can help replace the need to replace characters in a string

//6. if your'e keeping track of max or min of an array, use variables to hold them and also use Math.max or Math.min as you traverse

//7. when asked to do something in place, definitely thinking about swapping and if using a nested loop, think about whether or not you can use pointers instead to compare two elements

//8. to merge sorted intervals, think of the pointers approach