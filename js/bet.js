// -----------------------------
// Place Bet Function
// -----------------------------
function placeBet() {
  let num = document.getElementById("betNumber").value.trim();
  let type = document.getElementById("betType").value;
  let amount = parseInt(document.getElementById("betAmount").value);

  // Validation
  if (!num) return alert("Enter number");
  if (isNaN(amount) || amount < 100 || amount > 10000) 
      return alert("Coin amount must be between 100 and 10000");
  if (user.coin < amount) 
      return alert("Not enough coin! Watch ads to get more.");

  // Deduct coin first
  user.coin -= amount;

  // Generate result number
  let resultNumber = type === "2D"
    ? Math.floor(Math.random() * 100).toString().padStart(2,'0')
    : Math.floor(Math.random() * 1000).toString().padStart(3,'0');

  // Determine win
  let win = (num === resultNumber);
  let prize = 0;
  if (win) {
    prize = type === "2D" ? amount * 80 : amount * 500;
    alert(`🎉 You Win! Number: ${resultNumber}, Prize: ${prize} coin`);
  } else {
    alert(`❌ Lost! Number was ${resultNumber}`);
  }

  // Add prize if win
  user.coin += prize;

  // Save history AFTER prize calculation
  if (!user.history) user.history = [];
  user.history.push({
    number: num,
    type: type,
    bet: amount,
    win: win,
    prize: prize,
    resultNumber: resultNumber,
    time: new Date().toLocaleString()
  });

  // Update top bar coin & history UI
  updateCoin();
  renderHistory();
}

// -----------------------------
// Render History Function
// -----------------------------
function renderHistory() {
  const historyEl = document.getElementById("history");
  if (!historyEl) return;

  historyEl.innerHTML = "";
  if (!user.history) return;

  user.history.slice().reverse().forEach(h => {
    const li = document.createElement("li");
    li.innerText = `${h.type} - ${h.number} | Bet: ${h.bet} | ${h.win ? "WIN" : "LOSE"} | Prize: ${h.prize}`;
    historyEl.appendChild(li);
  });
}

// -----------------------------
// Watch Ads Simulation
// -----------------------------
function watchAds() {
  alert("🎬 Ads watched! +5000 Coin");
  user.coin += 5000;
  updateCoin();
}

// -----------------------------
// Spend Coin Function (Optional)
// -----------------------------
function spendCoin(amount) {
  if (user.coin < amount) {
    alert("❌ Not enough coin! Watch ads to get more.");
    return false;
  }
  user.coin -= amount;
  updateCoin();
  return true;
}

// -----------------------------
// Initial render
// -----------------------------
renderHistory();
