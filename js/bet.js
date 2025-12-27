function placeBet() {
  let num = document.getElementById("betNumber").value;
  let type = document.getElementById("betType").value;
  let amount = parseInt(document.getElementById("betAmount").value);

  // Validation
  if (!num) return alert("Enter number");
  if (isNaN(amount) || amount < 100 || amount > 10000) 
      return alert("Coin amount must be between 100 and 10000");
  if (user.coin < amount) 
      return alert("Not enough coin! Watch ads to get more.");

  // Deduct coin
  user.coin -= amount;
  updateCoin();

  // 🔹 Random result
  let resultNumber = type === "2D"
    ? Math.floor(Math.random()*100).toString().padStart(2,'0')
    : Math.floor(Math.random()*1000).toString().padStart(3,'0');

  // Determine win
  let win = num === resultNumber;
  let prize = 0;
  if (win) {
    prize = type === "2D" ? amount * 80 : amount * 500; // multiplier
    alert(`🎉 You Win! Number: ${resultNumber}, Prize: ${prize} coin`);
  } else {
    alert(`❌ Lost! Number was ${resultNumber}`);
  }

  // Add prize if won
  user.coin += prize;

  // Save history
  user.history.push({
    number: num,
    type: type,
    bet: amount,
    win: win,
    prize: prize,
    resultNumber: resultNumber,
    time: new Date().toLocaleString()
  });

  updateCoin();
  renderHistory();
}

// Render History
function renderHistory() {
  const history = document.getElementById("history");
  history.innerHTML = "";
  user.history.slice().reverse().forEach(h => {
    let li = document.createElement("li");
    li.innerText = `${h.type} - ${h.number} | Bet: ${h.bet} | ${h.win ? "WIN" : "LOSE"} | Prize: ${h.prize}`;
    history.appendChild(li);
  });
}

// Initial render
renderHistory();
