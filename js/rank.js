function showRank() {
  const rankList = document.getElementById("rankList");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.sort((a,b) => b.coin - a.coin);

  rankList.innerHTML = "";
  users.forEach((u,i) => {
    let div = document.createElement("div");
    div.innerText = `${i+1}. ${u.name} - 💰 ${u.coin}`;
    div.style.padding = "8px 12px";
    div.style.background = "#1e1e1e";
    div.style.margin = "6px 0";
    div.style.borderRadius = "10px";
    rankList.appendChild(div);
  });
}
