const express = require('express');
const app = express();
const products = [
    {id:0, name:"apple", cost:5, num:3},
    {id:1, name:"cherry", cost:2, num:4},
    {id:2, name:"orange", cost:3, num:1},
    {id:3, name:"pear", cost:2, num:6},
    {id:4, name:"peach", cost:1, num:5},
    {id:5, name:"melon", cost:7, num:4}
];

app.get('/', function (req, res) {
    res.send(products);
});
app.get('/products/:id', function (req, res) {
  res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});