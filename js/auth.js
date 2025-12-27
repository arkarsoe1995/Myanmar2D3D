function register() {
  let name = document.getElementById("regName").value;
  let pass = document.getElementById("regPass").value;
  if (!name || !pass) return alert("Fill all fields");

  let user = {
    name: name,
    pass: pass,
    coin: 5000,
    history: []
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Register success! Free 5000 coin 🎉");
  window.location.href = "home.html";
}

function login() {
  let name = document.getElementById("loginName").value;
  let pass = document.getElementById("loginPass").value;

  let user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.name !== name || user.pass !== pass) {
    return alert("Wrong username or password");
  }
  alert("Login success");
  window.location.href = "home.html";
}
