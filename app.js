const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Đọc dữ liệu từ file JSON
let famousPeople = JSON.parse(fs.readFileSync('data.json'));

// Trang chủ
app.get('/', (req, res) => {
  res.render('index', { famousPeople });
});

// Trang thông tin chi tiết
app.get('/:name', (req, res) => {
  const person = famousPeople.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());
  if (person) {
    res.render('detail', { person });
  } else {
    res.status(404).send('Not Found');
  }
});

// Lọc theo giới tính
app.get('/', (req, res) => {
  const gender = req.query['gioi-tinh'];
  if (gender) {
    const filteredPeople = famousPeople.filter(p => p.gender.toLowerCase() === gender.toLowerCase());
    res.render('index', { famousPeople: filteredPeople });
  } else {
    res.render('index', { famousPeople });
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
