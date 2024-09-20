document.getElementById('btn-cashoutmoney').addEventListener('click',function(event){
    event.preventDefault()
    const cashoutMoney =GetInputValueById('input-cashout-money')
    const pin =GetInputValueById('input-pin1')

    if (isNaN(cashoutMoney)) {
        alert('Please Give the number value')
        return;
    }
    if (pin === 12) {
        const balanceHave=GetTextFieldById('balance')
        if (cashoutMoney>balanceHave) {
            alert('You Do not have sufficient money')
            return;
        }
        const afterCashoutBalance=balanceHave - cashoutMoney;
        document.getElementById('balance').innerText = afterCashoutBalance;

        // transection history
        const div =document.createElement('div')
        div.classList.add('bg-lime-200','p-4')
        div.innerHTML =`
         <h4 class="font-bold text-2xl">Cashout</h4>
          <p>withdraw:${cashoutMoney} ,balance:${afterCashoutBalance}  </p>
        `
        document.getElementById('transection-container').appendChild(div)
    }else{
        alert('wrong pin number')
    }
})