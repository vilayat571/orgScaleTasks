// Third Solution: making mix with arrray:)

var sum_to_n_b_Reduce = function (n) {
  let productPrices = [];
  for (let i = 0; i <= n; i++) {
    productPrices[i] = [i];
  }

  return productPrices.reduce(
    (total, price) => (total = total + Number(price)),
    0
  );
};

console.log(sum_to_n_b_Reduce(5));
