var HTMLService = {
    
    displayAddedProduct: function (product) {
        var listItem = HTMLService.createListItem(product);
        HTMLService.addToList(listItem);          
    },
    
    createListItem: function (text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;
    },
    
    addToList: function (listItem) {
        var unOrderedList = document.getElementById('list-product');
        unOrderedList.appendChild(listItem);
    }
}