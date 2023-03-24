//https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript

// f(75, 25) => 100

// f(10, 50) => 20

// total - (P / 100) * total = current price
// for 75 and 25:
// total - 0.25 * total = 75
// total ( 1 - 0.25 ) = 75
// total = 75 / ( 1 - 0.25 )
// total * 0.75 = 75 => total = 75 / 0.75 = 75 / (75/100) = 75 * (100 / 75) = 100

const discoverOriginalPrice = (discountedPrice, salePercentage) => {
    return parseFloat((discountedPrice / (100 - salePercentage) * 100).toFixed(2));
}

console.log(discoverOriginalPrice(10, 50));
