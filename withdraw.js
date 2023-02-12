//withdraw button event
document.getElementById("btn-withdraw").addEventListener("click",function(){
    const withdrawValue=getInputFieldValue("field-withdraw");
    const previousWithdrawValue=getTextFieldValue("total-withdraw");
    const totalWithdrawValue=withdrawValue+previousWithdrawValue;
    const totalBalance=getTextFieldValue("total-balance");
    const updateBalance=totalBalance-withdrawValue;
    if(withdrawValue> totalBalance){
        alert("Insufficient Fund");
        return;
    }
    setValue("total-balance",updateBalance);
    setValue("total-withdraw",totalWithdrawValue);
})