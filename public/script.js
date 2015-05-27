function lookupSKU(){
	
    var sku = document.getElementById("SKU_form");

    if (sku.elements[0]) {
    	alert(sku.elements[0].value);
    }

}

