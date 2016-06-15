var ProductController={
    
    init: function(params) {
        ProductController.displayProducts();
    },
    
    
    addProduct: function(product) {
        ProductService.addProduct(product);
        HTMLService.displayAddedProduct(product);
    },
    
    displayProducts: function () {
        var products = ProductService.getList();
        products.forEach(HTMLService.displayAddedProduct);
    },

    getTotal: function () {
        var products = ProductService.getList();
        var i = 0;
        products.forEach(function(pr) {
            i+=pr.price;
        });

        console.log(i);
    }
    

};

ProductController.init();
total();
 
function save () {
        var inputName = document.getElementById("name");
        var inputPrice = document.getElementById("price");
        var ObProduct = { 'name': inputName.value, 'price': inputPrice.value};
        //var product = JSON.stringify(ObProduct);
        ProductController.addProduct(ObProduct);
        console.log(ObProduct.name);
        console.log(ObProduct.price);
        inputName.value = "";
        inputPrice.value = "";
}

function total() {
    var inputTotal = document.getElementById("total");
    inputTotal.value = ProductController.getTotal();
}