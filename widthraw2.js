document.getElementById("widthrawbtn").addEventListener("click",function(){
    const widthrawInput = inputGetElementById("widthraw-field");
    const balanceTotal = elementGetElementById("balance-total");
    if(isNaN(widthrawInput) || (widthrawInput < 0)){
        return alert("type a valid number");
    }
    if(widthrawInput > balanceTotal){
        return alert("You've insufficient balance. Please deposite first");
    }
    const widthrawTotal = elementGetElementById("widthraw-total");
    const newWidthrawTotal = widthrawInput + widthrawTotal;
    setElementById("widthraw-total", newWidthrawTotal);
    const newbalanceTotal = balanceTotal - widthrawInput;
    setElementById("balance-total", newbalanceTotal);
})