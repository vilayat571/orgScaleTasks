// Second Solution: applying for or while loop to sum n

var sum_to_n_b_loop = function (n) {
  let i = 0;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }

  return sum;
};

console.log(sum_to_n_b_loop(5));
