## Array Problems

[Two sum](https://leetcode.com/problems/two-sum/)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
##### make use of hash table, single for loop - during each iteration a pair of number and diff(=target-number) gets stored in the hashtable, if number in hashtable as key, return the pair. 
Note: Usually/in the que there's just a single pair, I have modified the solution for multiple pairs.<br/>
Eg. Array=[2,4,7,8,9] target=11 <br/> for i=1 hashtable= { '7': 4, '9': 2 } number=4, diff=7 <br/> for i=2 hashtable= { '7': 4, '9': 2 } number=7, diff=4 as hashtable[7] exists, push this pair to the output 

[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock]
