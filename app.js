const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 3000;

// Routes
const adminRoutes = require('./routes/admin');

// Middlewares
app.use(cors());
app.use(adminRoutes);


app.get('/', (req, res) => {
    res.send('works');
});

app.listen(port, () => {
    console.log('server listens to port ->', port);
})