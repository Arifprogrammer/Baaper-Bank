const submitBtn = document.getElementById("submitbtn");
const inputValue = document.getElementById("userid");
const passValue = document.getElementById("userpass");
submitBtn.addEventListener("click", function(){
    if((inputValue.value === "arifmgtcu@gmail.com") && (passValue.value === "Hello123")){
        window.location.href = "account.html";
        inputValue.value = "";
        passValue.value = "";
    }
    else{
        alert("thik gori lek");
        inputValue.value = "";
        passValue.value = "";
    }
})