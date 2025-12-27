function placeBet() {
  if (user.coin < 1000) return alert("Coin not enough. Watch ads!");

  let num = document.getElementById("betNumber").value;
  let type = document.getElementById("betType").value;
  if (!num) return alert("Enter number");

  user.coin -= 1000;

  let win = Math.random() < 0.05; // demo win
  let result = win ? (type === "2D" ? 80000 : 500000) : 0;

  if (win) alert("🎉 You Win! Prize: " + result);

  if (win) user.coin += result;

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
  const history = document.getElementById("history");
  history.innerHTML = "";
  user.history.slice().reverse().forEach(h => {
    let li = document.createElement("li");
    li.innerText = `${h.type} - ${h.number} | ${h.win ? "WIN" : "LOSE"}`;
    history.appendChild(li);
  });
}
renderHistory();
