// apply button
let sum = 0;

document.getElementById('apply').addEventListener('click', function(){
    const totalsum =  parseFloat(document.getElementById('grand-total').innerText);
    sum = parseInt(sum)+totalsum;
    sum= (sum*20)/100;

    if(totalsum > 200){
        document.getElementById('diccount').innerText = sum;
    }else{
        alert('plase purchase atleast 200tk');
    }

    const grandTotal =document.getElementById('grand-total');
    const discount = document.getElementById('diccount').innerText;
    const total = document.getElementById('total-price').innerText;
    const finalSum = parseInt(total) - parseInt(discount);
    grandTotal.innerText= finalSum;
    const rounded = parseFloat(grandTotal.innerText).toFixed(2);
})


  
