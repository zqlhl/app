const friends = {};
const privateChats = {};

// 添加好友按钮
function addFriendRequest(username) {
  const friendName = prompt("输入好友用户名：");
  if (friendName && friendName !== username) {
    if (!friends[username]) friends[username] = [];
    if (!friends[friendName]) friends[friendName] = [];
    alert(`${friendName} 收到了好友申请！`);
  }
}

// 同意好友申请
function acceptFriendRequest(username, friendName) {
  if (!friends[username]) friends[username] = [];
  if (!friends[friendName]) friends[friendName] = [];
  friends[username].push(friendName);
  friends[friendName].push(username);
  alert(`${username} 和 ${friendName} 成为好友！`);
  updateFriendList(username);
}

// 更新好友列表
function updateFriendList(username) {
  const friendContainer = document.getElementById('friend-container');
  friendContainer.innerHTML = '';
  (friends[username] || []).forEach(friend => {
    const friendButton = document.createElement('button');
    friendButton.textContent = friend;
    friendButton.onclick = () => openPrivateChat(username, friend);
    friendContainer.appendChild(friendButton);
  });
}
