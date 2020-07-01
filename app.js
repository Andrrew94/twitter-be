const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const mongoConnect = require('./util/database').mongoConnect;

// Routes
const adminRoutes = require('./routes/admin');

// Middlewares
app.use(cors());
app.use(adminRoutes);


app.get('/', (req, res) => {
    res.send('works');
});



mongoConnect(() => {
    console.log("reached")
    app.listen(port, () => {
        console.log('server listens to port ->', port);
    })
});