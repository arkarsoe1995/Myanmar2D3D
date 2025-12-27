setTimeout(() => {
  let user = localStorage.getItem("user");
  if (user) window.location.href = "home.html";
  else window.location.href = "login.html";
}, 2000);
