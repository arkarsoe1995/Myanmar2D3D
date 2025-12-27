// Load or initialize users array
let users = JSON.parse(localStorage.getItem("users")) || [];

// Current user
let user = JSON.parse(localStorage.getItem("user"));
if (!user) location.href = "login.html";

document.getElementById("userName").innerText = user.name;
document.getElementById("userCoin").innerText = "💰 " + user.coin;

function updateCoin() {
  // Update current user in users array
  let idx = users.findIndex(u => u.name === user.name);
  if (idx !== -1) {
    users[idx] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("userCoin").innerText = "💰 " + user.coin;
}

// Ads simulate
function watchAds() {
  alert("Ads watched! +5000 Coin");
  user.coin += 5000;
  updateCoin();
}
