const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  /* テスト用、json形式で固定値を返す */
  res.json({ message: "backend-index-api" });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
