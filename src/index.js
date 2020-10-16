module.exports = function reverse (n) {
  const reversedArray = String(Math.abs(n)).split('').reverse();
  return +reversedArray.join('');
}
