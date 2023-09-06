// diccount button
document.getElementById('coupon').addEventListener('keyup', function(event){
    const text = event.target.value;
    const apply =document.getElementById('apply');
    if(text ==='SELL200'){
        apply.removeAttribute('disabled');
    }else{
        apply.setAttribute('disabled', true);
    }   
})

// go home
document.getElementById('go-home').addEventListener('click', function(){
    location.reload();
})




   
