// Handle login
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verify user via Cloudflare Worker API
    const response = await fetch('https://yyzqzq.us.kg/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Login successful! Check your 4-digit key.');
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("chatSection").style.display = "block";
    } else {
        alert('Invalid username or password!');
    }
});

// Verify key
function verifyKey() {
    const key = document.getElementById("keyInput").value;
    if (key.length === 4) {
        alert('Key verified!');
        document.getElementById("chatInterface").style.display = "block";
    } else {
        alert('Invalid key!');
    }
}

// Send message
function sendMessage() {
    const message = document.getElementById("messageInput").value;
    const file = document.getElementById("fileInput").files[0];
    const chatOutput = document.getElementById("chatOutput");

    if (message || file) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;

        if (file) {
            const fileLink = document.createElement("a");
            fileLink.href = URL.createObjectURL(file);
            fileLink.textContent = file.name;
            fileLink.target = "_blank";
            messageDiv.appendChild(fileLink);
        }

        chatOutput.appendChild(messageDiv);
    }
}
