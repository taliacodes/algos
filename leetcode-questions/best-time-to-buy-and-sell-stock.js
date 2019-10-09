// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const maxProfit = (prices) => {
  let max = 0
  let min = Infinity
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    else {
      let profit = prices[i] - min
      max = Math.max(profit, max)
    }
  }
  return max
}

console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([1,2,3,4,5])) // 4
console.log(maxProfit([6,3,7,9,2,5,4,10])) // 6

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


//So the idea of this seems to be that you want to first find the minimum number and if the number is not the minimum number, then you want to keep checking the difference (or profit) between that minimum number and the next number

