// problem-1

function newPrice(currentPrice, discount) {
  let num = (currentPrice * discount) / 100;
  let result = currentPrice - num;
  return result;
}
// let output = newPrice(2000,17.17);
// console.log(output);
