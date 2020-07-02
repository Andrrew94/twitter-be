const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const mongoConnect = require('./util/database').mongoConnect;

const adminRoutes = require('./routes/admin');

// Middlewares
app.use(cors());
app.use(adminRoutes);

// Routes
app.get('/', (req, res) => {
    res.send({"msg": "Connection works!"});
});

mongoConnect(() => {
    app.listen(port, () => {
        console.log('server listens to port ->', port);
    })
});
