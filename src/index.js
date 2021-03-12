
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  const newArray = matrix.reduce(
    (acc, value, i) =>
      [...acc, ...(i % 2 == 0 ? value : value.reverse())],
    []
  )
  return newArray;
}
