var ProductController={
    
    init: function(params) {
        ProductController.displayProducts();
    },
    
    
    addProduct: function(product) {
        ProductService.addProduct(product);
        HTMLService.displayAddedProduct(product);
    },
    
    displayProducts: function () {
        var names = ProductService.getList();
        names.forEach(HTMLService.displayAddedProduct);
    }
    
};

ProductController.init();

 function save () {
        var inputName = document.getElementById("name");
        var inputPrice = document.getElementById("price");
        var ObProduct = { 'name': inputName.value, 'price': inputPrice.value};
        //var product = JSON.stringify(ObProduct);
        ProductController.addProduct(ObProduct);
        inputName.value = "";
        inputPrice.value = "";
}