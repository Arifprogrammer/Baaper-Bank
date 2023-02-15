// ! Step 1 - find widthraw button & widthraw input value
const widthrawBtn = document.getElementById('widthrawbtn');
const widthrawInputField = document.getElementById('widthraw-field');
// ! step 2 - if widthraw button clicked then increment the value of widthraw total & decrement the value of balace total.
widthrawBtn.addEventListener("click", function(){
// ! step 3 - convert string to number.
    const widthrawAmount = Number(widthrawInputField.value);
// * এইখানে Number method empty string কে 0 output হিসেবে দেই। তাই এইখানে parseFloat বা parseInt use করতে হবে যা empty string কে NaN output হিসেবে দেই।
// ! step 4 - if widthraw button clicked then blank the widthraw input field.
    widthrawInputField.value ="";
// ! step - 5 if input is not a number then it shows an alerts 
    if(isNaN(widthrawAmount)){
        return alert("type a valid number");
    }
// ! step - 6 if input is less than 0 then it shows an alerts 
    if(widthrawAmount < 0){
        return alert("type a positive number")
    }
    const balanceTotalString = document.getElementById('balance-total').innerText;
    const balanceTotal = Number(balanceTotalString);
// ! step 7 - if widthrawAmount is greater than balanceTotal then it shows an alert.
    if(widthrawAmount > balanceTotal){
        return alert("You've insufficient balance. Please deposite first");
    }
    const newBalanceTotal = balanceTotal - widthrawAmount;
    document.getElementById('balance-total').innerText = newBalanceTotal;
    const widthrawTotalString = document.getElementById('widthraw-total').innerText;
// ! step 8 - convert string to number.
    const widthrawTotal = Number(widthrawTotalString);
    const newWidthrawTotal = widthrawAmount + widthrawTotal;
    document.getElementById('widthraw-total').innerText = newWidthrawTotal;
})