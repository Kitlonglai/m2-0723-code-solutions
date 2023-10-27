const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const bothPrices = prices.map((price) => ({ price, salePrice: price / 2 }));
console.log('bothPrices: ', bothPrices);
