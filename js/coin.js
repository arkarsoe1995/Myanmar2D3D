// Load users and current user
let users = JSON.parse(localStorage.getItem("users")) || [];
let user = JSON.parse(localStorage.getItem("user"));

// If no user logged in, redirect to login
if (!user) {
    location.href = "login.html";
}

// -----------------------------
// Top Bar Update Function
// -----------------------------
function updateTopBar() {
    document.getElementById("userName").innerText = user.name; // username only
    document.getElementById("userCoin").innerText = "💰 " + user.coin;
}

// Initial update on page load
updateTopBar();

// -----------------------------
// Coin Update Function
// -----------------------------
function updateCoin() {
    // Find user in users array
    let idx = users.findIndex(u => u.name === user.name);
    if (idx !== -1) {
        users[idx] = user; // Update existing
    } else {
        users.push(user); // Add new
    }

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));

    // Refresh top bar
    updateTopBar();
}

// -----------------------------
// Watch Ads Simulation
// -----------------------------
function watchAds() {
    alert("🎬 Ads watched! +5000 Coin");
    user.coin += 5000;
    updateCoin();
}

// Optional: function to spend coin (e.g., betting)
function spendCoin(amount) {
    if (user.coin < amount) {
        alert("❌ Not enough coin! Watch ads to get more.");
        return false;
    }
    user.coin -= amount;
    updateCoin();
    return true;
}
