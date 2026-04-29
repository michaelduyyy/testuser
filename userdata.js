<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSON 假数据生成器</title>
    <style>
        body { font-family: sans-serif; padding: 20px; background: #f8f9fa; }
        .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); max-width: 600px; margin: auto; }
        pre { background: #272822; color: #f8f8f2; padding: 15px; border-radius: 6px; overflow: auto; max-height: 400px; font-size: 13px; }
        button { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-right: 10px; }
        button:hover { background: #0056b3; }
        .controls { margin-bottom: 15px; }
    </style>
</head>
<body>
    <div class="card">
        <h3>📦 JSON 假数据生成器</h3>
        <div class="controls">
            生成数量: <input type="number" id="count" value="5" style="width: 50px; padding: 5px;">
            <button onclick="generateData()">刷新数据</button>
            <button onclick="copyData()" style="background: #28a745;">复制结果</button>
        </div>
        <pre id="output"></pre>
    </div>

    <script>
        function generateData() {
            const count = document.getElementById('count').value || 5;
            const users = Array.from({ length: parseInt(count) }).map((_, i) => ({
                id: i + 1,
                uuid: self.crypto.randomUUID(), // 使用原生的 UUID 生成
                name: `User_${Math.random().toString(36).slice(-5).toUpperCase()}`,
                email: `test${i + 1}@example.com`,
                status: Math.random() > 0.5 ? "Active" : "Inactive",
                createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0]
            }));
            
            document.getElementById('output').innerText = JSON.stringify(users, null, 2);
        }

        function copyData() {
            const text = document.getElementById('output').innerText;
            navigator.clipboard.writeText(text).then(() => alert("JSON 已复制到剪贴板"));
        }

        // 初始化
        generateData();
    </script>
</body>
</html>
