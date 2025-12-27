function showRank() {
  const rankList = document.getElementById("rankList");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // sort by coin descending
  users.sort((a,b) => b.coin - a.coin);

  rankList.innerHTML = "";
  users.forEach((u,i) => {
    let div = document.createElement("div");
    div.innerText = `${i+1}. ${u.name} - 💰 ${u.coin}`;
    rankList.appendChild(div);
  });
}
