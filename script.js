document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 获取 Turnstile Token
    const turnstileToken = document.querySelector('.cf-turnstile').getAttribute('data-cf-token');

    const response = await fetch('adtapp.lhl2006111.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, turnstileToken }),
    });

    const result = await response.json();
    if (result.success) {
        alert('登录成功！');
        // 跳转到聊天页面，附带密钥
        window.location.href = `chat.html?key=${result.key}`;
    } else {
        alert(result.message || '登录失败，请重试');
    }
});
