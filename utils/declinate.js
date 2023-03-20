const declinate = (number, graduation) => {
  let remainder = number % 10;
  return remainder === 1 ? graduation[0] : 2 <= remainder && remainder <= 4 ? graduation[1] : graduation[2];
}

export default declinate;
