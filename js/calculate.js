let total =0;
function getClicked(target){
    const selectedProduts = document.getElementById('selected-Products')
    const productName = (target.childNodes[5].childNodes[1].innerText);
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProduts.appendChild(li);

    const price = (target.childNodes[5].childNodes[3].childNodes[1].innerText);

    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total;

    const grandTotal =document.getElementById('grand-total');
    grandTotal.innerText= total;
    
    // purchase button
    const grandTotalElement = parseFloat(document.getElementById('grand-total').innerText);
    const btnPurchase = document.getElementById('Make-purchase');
    if(grandTotalElement > 0){
        btnPurchase.removeAttribute('disabled');
    }
    else{
        btnPurchase.setAttribute('disabled', true);
    }
}
