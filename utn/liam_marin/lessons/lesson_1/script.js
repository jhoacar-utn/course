function calculate() {
  const coins = [];
  const multis = [];
  for (let i = 0; i < 4; i++) {
    coins[i] = parseInt(document.getElementById(`coin_${i + 1}`).value);
    multis[i] = parseInt(document.getElementById(`multiplier_${i + 1}`).value);
  }
  const enumerated = Array.from(coins.entries()).sort((a, b) => a[1] - b[1]);
  const sortedMultis = [...multis].sort();
  let result = 0;
  for (let i = 0; i < 4; i++) {
    result += enumerated[i][1] * sortedMultis[i];
    let idx = enumerated[i][0] + 1;
    document.getElementById(`response_${idx}`).value = sortedMultis[i].toString();
  }
  document.getElementById("response_total").value = result.toString();
}

document.getElementById("calculate").addEventListener("click", calculate);
