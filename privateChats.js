// 打开私人聊天室
function openPrivateChat(user1, user2) {
  const chatId = [user1, user2].sort().join('-'); // 确保唯一性
  if (!privateChats[chatId]) privateChats[chatId] = [];

  const privateChatContainer = document.getElementById('private-chat-container');
  privateChatContainer.innerHTML = '';

  const chatMessages = privateChats[chatId];
  chatMessages.forEach(msg => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    privateChatContainer.appendChild(messageElement);
  });

  const messageInput = document.createElement('input');
  messageInput.type = 'text';
  messageInput.placeholder = '输入消息';
  privateChatContainer.appendChild(messageInput);

  const sendButton = document.createElement('button');
  sendButton.textContent = '发送';
  sendButton.onclick = () => {
    const message = messageInput.value.trim();
    if (message) {
      privateChats[chatId].push(`${user1}: ${message}`);
      openPrivateChat(user1, user2); // 刷新消息
    }
  };
  privateChatContainer.appendChild(sendButton);
}
