window.onload = () => {
  coins();
};

const coins = () => {
  document.getElementById("coin_1").value = 5;
  document.getElementById("coin_2").value = 3;
  document.getElementById("coin_3").value = 7;
  document.getElementById("coin_4").value = 1;
};

const getAnswer = () => {
  let a = document.getElementById("coin_1").value;
  let b = document.getElementById("coin_2").value;
  let c = document.getElementById("coin_3").value;
  let d = document.getElementById("coin_4").value;

  let coinAge = [a, b, c, d];

  let m1 = document.getElementById("multiplier_1").value;
  let m2 = document.getElementById("multiplier_2").value;
  let m3 = document.getElementById("multiplier_3").value;
  let m4 = document.getElementById("multiplier_4").value;

  let multi = [m1, m2, m3, m4];
  const coinSorted = coinAge.sort((a, b) => b - a);
  const multiSorted = multi.sort((a, b) => b - a);

  const result =
    coinSorted[0] * multiSorted[0] +
    coinSorted[1] * multiSorted[1] +
    coinSorted[2] * multiSorted[2] +
    coinSorted[3] * multiSorted[3];

  console.log(result);

  document.getElementById("response_1").value = multiSorted[1];
  document.getElementById("response_2").value = multiSorted[2];
  document.getElementById("response_3").value = multiSorted[0];
  document.getElementById("response_4").value = multiSorted[3];
  document.getElementById("response_total").value = result;
};
