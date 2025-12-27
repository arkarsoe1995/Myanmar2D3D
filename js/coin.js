let user = JSON.parse(localStorage.getItem("user"));
if (!user) location.href = "login.html";

document.getElementById("userName").innerText = user.name;
document.getElementById("userCoin").innerText = "💰 " + user.coin;

function updateCoin() {
  localStorage.setItem("user", JSON.stringify(user));
  document.getElementById("userCoin").innerText = "💰 " + user.coin;
}
