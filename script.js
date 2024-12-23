document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert('请完成验证码验证');
        return;
    }

    const response = await fetch('https://你的CloudflareWorker地址', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, recaptchaResponse }),
    });

    const result = await response.json();
    if (result.success) {
        alert('登录成功！');
        // 跳转到聊天页面，传递密钥
        window.location.href = `chat.html?key=${result.key}`;
    } else {
        alert('登录失败，请检查账号或密码');
    }
});
