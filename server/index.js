const dns = require('dns');
dns.setServers(['1.1.1.1', '1.0.0.1'])
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// apis
app.use('/api/admin', require('./api/admin.js'));
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use('/api/customer', require('./api/customer.js'));