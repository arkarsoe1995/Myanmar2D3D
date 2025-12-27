function register() {
  let name = document.getElementById("regName").value;
  let pass = document.getElementById("regPass").value;
  if (!name || !pass) return alert("Fill all fields");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(users.find(u => u.name === name)) return alert("Username already exists");

  let user = {
    name: name,
    pass: pass,
    coin: 5000,
    history: []
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(user));
  alert("Register success! Free 5000 coin 🎉");
  window.location.href = "home.html";
}

function login() {
  let name = document.getElementById("loginName").value;
  let pass = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.name === name && u.pass === pass);
  if(!user) return alert("Wrong username or password");

  localStorage.setItem("user", JSON.stringify(user));
  alert("Login success");
  window.location.href = "home.html";
}
