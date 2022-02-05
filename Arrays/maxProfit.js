var maxProfit = function(prices) {
    let maxprofit=0;
    while(prices.length>0){
        buy=Math.min(...prices);
        i=prices.indexOf(buy);
        sell=Math.max(...prices.slice(i+1));
        if(Number.isFinite(sell)) 
          { j=prices.indexOf(sell)
              if(maxprofit<(sell-buy))
                maxprofit=sell-buy;
            prices.splice(i,1);
          }
        else prices.splice(i,1); 
    }
    
   return maxprofit;
};

