const express = require('express');
const rootRoutes = require('./routes/root');
const productRoutes = require('./routes/productRoutes'); // Import product routes
const connectDB = require('./config/connectDB.cjs'); 
connectDB();

const app = express();

app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(rootRoutes);
app.use(productRoutes); // Sử dụng product routes

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
