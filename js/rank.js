function showRank() {
  const rankList = document.getElementById("rankList");
  rankList.innerHTML = `<p>${user.name} - 💰 ${user.coin}</p>`;
}
