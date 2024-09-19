// step-1:set event handler
document.getElementById('btn-login').addEventListener('click',function (event) {
    // step -2:prevent reloading browser
    event.preventDefault();
    console.log('login button');
    // step-3:get the hpone number
   const phoneNumber= document.getElementById('phone-number').value;
   const pinNumber=document.getElementById('pin-number').value
    console.log(phoneNumber,pinNumber);
    if (phoneNumber.length=== 11 && pinNumber.length===4) {
        window.location.href ='/home.html';
    }
    else{
        alert('Wrong ')
    }
})
