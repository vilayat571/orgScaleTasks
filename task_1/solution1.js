// First solution: applying recursive function to sum integer n

var sum_to_n_a_recursion = function (n) {
  if (n == 0) return 0;

  return n + sum_to_n_a_recursion(n - 1); // 5+4+3+2+1
};
console.log(sum_to_n_a_recursion(5)); // 15
