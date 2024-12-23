document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;

    // 模拟验证账号和密码
    if (account.length === 11 && /^[A-Za-z0-9]{8}$/.test(password)) {
        alert('登录成功！');
        window.location.href = 'chat.html';
    } else {
        alert('账号或密码格式错误！');
    }
});
