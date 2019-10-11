// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

const maxProfit = (prices) => {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i+1]) {
      profit += prices[i+1] - prices[i]
    }
  }
  return profit
}

console.log(maxProfit([7,1,5,3,6,4])) //7
console.log(maxProfit([1,2,3,4,5])) // 4
console.log(maxProfit([7,6,4,3,1])) //0


//for this problem, we just want to know if the price at i+1 is greater than the current price because if it is, that means that we can make a profit. To solve, loop through and check if the element at i+1 is greater and if it is, add that to the profit. At the end, return the profit.