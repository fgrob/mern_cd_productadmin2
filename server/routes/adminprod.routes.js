const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/crear', ProductController.createProduct);
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/product/:id', ProductController.OneProduct);
}