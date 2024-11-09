const express = require('express');
const app = express();
const rootRoutes = require('./routes/root');


app.set('view engine', 'ejs');
app.set("views","./views")
app.use(rootRoutes);
// Khởi động server tại port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
