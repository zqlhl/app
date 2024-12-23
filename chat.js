function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value;
    if (message) {
        const msgElement = document.createElement("div");
        msgElement.textContent = message;
        chatBox.appendChild(msgElement);
        input.value = "";
    }
}
