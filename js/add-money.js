document.getElementById('btn-addmoney').addEventListener('click',function(event){
event.preventDefault()
console.log('abc');
const addMoney= GetInputValueById('input-addmoney')
const pin= GetInputValueById('input-pin')

if (isNaN(addMoney)) {
    alert('Please Give the number value')
    return
}
if (pin === 12) {
    const balance=GetTextFieldById('balance')
    const updatebalance=balance + addMoney;
    document.getElementById('balance').innerText = updatebalance;
    // tranjection history
    const p= document.createElement('p')
    p.innerText =`
    Added:${addMoney} , Tk:${updatebalance}
    `
    document.getElementById('transection-container').appendChild(p)
    
}else{
    alert('wrong pin number')
}

})