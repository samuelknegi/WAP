const express = require('express');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json()); //post, put req.body = {}
app.use('/products', productRouter);


app.use((req, res, next) => {
    res.status(404).send('API not supported!');
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000);