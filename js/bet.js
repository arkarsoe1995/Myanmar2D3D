function placeBet() {
  if (user.coin < 1000) {
    alert("Coin not enough. Watch ads!");
    return;
  }

  let num = betNumber.value;
  let type = betType.value;

  if (!num) return alert("Enter number");

  user.coin -= 1000;

  let win = Math.random() < 0.05; // 5% win (demo)

  let result = win
    ? (type === "2D" ? 80000 : 500000)
    : 0;

  if (win) {
    alert("🎉 You Win! Prize: " + result);
    user.coin += result;
  }

  user.history.push({
    number: num,
    type: type,
    win: win,
    prize: result,
    time: new Date().toLocaleString()
  });

  updateCoin();
  renderHistory();
}

function renderHistory() {
  history.innerHTML = "";
  user.history.slice().reverse().forEach(h => {
    let li = document.createElement("li");
    li.innerText = `${h.type} - ${h.number} | ${h.win ? "WIN" : "LOSE"}`;
    history.appendChild(li);
  });
}

renderHistory();