function placeBet() {
  let num = betNumber.value.trim();
  let type = betType.value;
  let amount = parseInt(betAmount.value);

  if (!num) return alert("Enter number");
  if (amount < 100 || amount > 10000) return alert("100 - 10000 only");
  if (user.coin < amount) return alert("Not enough coin");

  user.coin -= amount;

  let result = type === "2D"
    ? Math.floor(Math.random()*100).toString().padStart(2,"0")
    : Math.floor(Math.random()*1000).toString().padStart(3,"0");

  let win = num === result;
  let prize = win ? (type === "2D" ? amount*80 : amount*500) : 0;

  user.coin += prize;

  user.history = user.history || [];
  user.history.push({ num, type, amount, prize, win });

  updateCoin();
  renderHistory();
}

function renderHistory() {
  history.innerHTML = "";
  user.history.slice().reverse().forEach(h => {
    let li = document.createElement("li");
    li.innerText = `${h.type} ${h.num} | Bet ${h.amount} | ${h.win ? "WIN" : "LOSE"} | ${h.prize}`;
    history.appendChild(li);
  });
}

renderHistory();
