document.getElementById("depositebtn").addEventListener("click",function(){
    const depositeInput = inputGetElementById("deposite-field");
    if(isNaN(depositeInput) || (depositeInput < 0)){
        return alert("type a valid number");
    }
    if(depositeInput > 30000){
        return alert("You can't deposite over 30000 in each deposite")
    }
    const depositeTotal = elementGetElementById("deposite-total");
    const newDepositeTotal = depositeInput + depositeTotal;
    setElementById("deposite-total", newDepositeTotal);
    const balanceTotal = elementGetElementById("balance-total");
    const newbalanceTotal = depositeInput + balanceTotal;
    setElementById("balance-total", newbalanceTotal);
})