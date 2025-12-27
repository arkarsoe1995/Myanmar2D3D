function placeBet() {
  if (user.coin < 1000) return alert("Coin not enough. Watch ads!");

  let num = document.getElementById("betNumber").value;
  let type = document.getElementById("betType").value;
  if (!num) return alert("Enter number");

  user.coin -= 1000;

  // 🔹 Real Result (Demo)
  let resultNumber = type === "2D" 
    ? Math.floor(Math.random()*100).toString().padStart(2,'0')
    : Math.floor(Math.random()*1000).toString().padStart(3,'0');

  let win = num === resultNumber;
  let prize = 0;
  if (win) prize = type === "2D" ? 80000 : 500000;

  if (win) alert(`🎉 You Win! Number: ${resultNumber}, Prize: ${prize} coin`);
  else alert(`❌ Lost! Number was ${resultNumber}`);

  user.coin += prize;

  user.history.push({
    number: num,
    type: type,
    win: win,
    prize: prize,
    resultNumber: resultNumber,
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
