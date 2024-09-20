function showSectionById(id) {
   document.getElementById('add-money-form').classList.add('hidden') 
   document.getElementById('cashout-money-form').classList.add('hidden') 
   document.getElementById('add-money-form').classList.add('hidden') 
//    show the section with the provide as id
document.getElementById(id).classList.remove('hidden')
}



// input field function
function GetInputValueById(id) {
   const inputMoney=document.getElementById(id);
   const inputMoneyValue=inputMoney.value;
    const inputMoneyNumber=parseFloat(inputMoneyValue);
    inputMoney.value = '';
    return inputMoneyNumber;
    
}
// inner text function
function GetTextFieldById(id) {
    const textField= document.getElementById(id).innerText;
    const textConvertNumber=parseFloat(textField)
    return textConvertNumber;
}