let user = JSON.parse(localStorage.getItem("user"));

if (!user) location.href = "login.html";

userName.innerText = user.name;
userCoin.innerText = "💰 " + user.coin;

function updateCoin() {
  localStorage.setItem("user", JSON.stringify(user));
  userCoin.innerText = "💰 " + user.coin;
}