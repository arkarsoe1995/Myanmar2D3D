let users = JSON.parse(localStorage.getItem("users")) || [];
let user = JSON.parse(localStorage.getItem("user"));

if (!user) location.href = "login.html";

function updateTopBar() {
  document.getElementById("userName").innerText = user.name;
  document.getElementById("userCoin").innerText = "💰 " + user.coin;
}

updateTopBar();

function updateCoin() {
  let i = users.findIndex(u => u.name === user.name);
  if (i !== -1) users[i] = user;
  else users.push(user);

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("users", JSON.stringify(users));
  updateTopBar();
}

function watchAds() {
  user.coin += 5000;
  updateCoin();
}

function loadProfile() {
  document.getElementById("profileName").innerText = user.name;
  document.getElementById("profileCoin").innerText = user.coin;
}

function logout() {
  localStorage.removeItem("user");
  location.href = "login.html";
}
