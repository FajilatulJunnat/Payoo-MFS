// cashout button feature
document.getElementById('cashout-money-page').addEventListener('click',function(){
    document.getElementById('cashout-money-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
// add button feature
document.getElementById('add-money-page').addEventListener('click',function(){
    document.getElementById('cashout-money-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})



// for add money
document.getElementById('btn-addmoney').addEventListener('click',function(event){
    event.preventDefault();
    console.log('add money button');
    // get moneyadd
    const inputAddMoney=document.getElementById('input-addmoney');
    const inputAddMoneyvalue =inputAddMoney.value;
    const addMoneyNumber=parseFloat(inputAddMoneyvalue)
    inputAddMoney.value =" "
    // get pin number
    const inputpin =document.getElementById('input-pin').value;
   
    if (inputpin==='2') {
       const currentBalanance=document.getElementById('balance').innerText
       const currentBalananceNumber=parseFloat(currentBalanance)
        const updateBalance=addMoneyNumber+currentBalananceNumber;
        document.getElementById('balance').innerText=updateBalance;
       
        
    }else{
        alert('wrong')
    }
    
})


// for cashout
document.getElementById('btn-cashoutmoney').addEventListener('click',function(event){
    event.preventDefault();
    console.log('cashout money button');
    // get moneycashout
    const inputCashMoney=document.getElementById('input-cashout-money');
    const inputCashMoneyvalue =inputCashMoney.value;
    const CashMoneyNumber=parseFloat(inputCashMoneyvalue)
    inputCashMoney.value =""
    
    
    // get pin number
    const inputpin1 =document.getElementById('input-pin1').value;
   
    if (inputpin1 === '0') {
       const currentBalanance=document.getElementById('balance').innerText
       const currentBalananceNumber=parseFloat(currentBalanance)
        const updateBalance=currentBalananceNumber - CashMoneyNumber;
        document.getElementById('balance').innerText=updateBalance;
       
        
    }else{
        alert('wrong')
    }
    
})
