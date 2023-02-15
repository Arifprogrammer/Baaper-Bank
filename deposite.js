// ! Step 1 - find deposite button & deposite input value
const depositeBtn = document.getElementById('depositebtn');
const depositeInputField = document.getElementById('deposite-field');
// ! step 2 - if deposite button clicked then increment both value of deposite total & balace total.
depositeBtn.addEventListener("click", function(){
// ! step 3 - convert string to number.
    const depositeAmount = Number(depositeInputField.value); 
// * এইখানে Number method empty string কে 0 output হিসেবে দেই। তাই এইখানে parseFloat বা parseInt use করতে হবে যা empty string কে NaN output হিসেবে দেই।
// ! step 4 - if deposite button clicked then blank the deposite input field.
    depositeInputField.value ="";
// ! step - 5 if input is not a number then it shows an alerts 
    if(isNaN(depositeAmount)){
        return alert("type a valid number");
    }
// ! step - 6 if input is greater than 30000 then it shows an alerts 
    if(depositeAmount > 30000){
        return alert("You can't deposite over 30000 in each deposite")
    }
// ! step - 7 if input is less than 0 then it shows an alerts 
    if(depositeAmount < 0){
        return alert("type a positive number")
    }
    const depositeTotalString = document.getElementById('deposite-total').innerText;
// ! step 8 - convert string to number.
    const depositeTotal = Number(depositeTotalString);
    const newDepositeTotal = depositeAmount + depositeTotal;
    document.getElementById('deposite-total').innerText = newDepositeTotal;
    const balanceTotalString = document.getElementById('balance-total').innerText;
    const balanceTotal = Number(balanceTotalString);
    const newBalanceTotal = depositeAmount + balanceTotal;
    document.getElementById('balance-total').innerText = newBalanceTotal;
})