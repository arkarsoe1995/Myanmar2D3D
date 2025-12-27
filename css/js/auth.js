function register() {
  let name = regName.value;
  let pass = regPass.value;

  if (!name || !pass) {
    alert("Fill all fields");
    return;
  }

  let user = {
    name: name,
    pass: pass,
    coin: 5000,   // 🎁 Free Coin
    history: []
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Register success! Free 5000 coin 🎉");
  window.location.href = "home.html";
}

function login() {
  let name = loginName.value;
  let pass = loginPass.value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.name !== name || user.pass !== pass) {
    alert("Wrong username or password");
    return;
  }

  alert("Login success");
  window.location.href = "home.html";
}
