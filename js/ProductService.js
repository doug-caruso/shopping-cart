
var ProductService = {

    products:  [],

    getList: function () {
        ProductService.loadProducts();
        return ProductService.products;
    },

    addProduct: function (product) {
        ProductService.products.push(product);
        ProductService.saveProducts();
    },

    loadProducts: function () {
        var productsJsonText = window.localStorage.getItem('list-products');
        if(productsJsonText){
            ProductService.products = JSON.parse(productsJsonText);
        }
    },

    saveProducts: function () {
        var productsJsonText = JSON.stringify(ProductService.products);
        window.localStorage.setItem('list-products', productsJsonText);
    }
};