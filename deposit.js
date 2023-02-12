//deposit buttton event
document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositValue=getInputFieldValue("field-deposit");
    const previousDepositValue=getTextFieldValue("total-deposit");
    const totalDepositValue=depositValue+previousDepositValue;
    setValue("total-deposit",totalDepositValue);
    const totalBalance=getTextFieldValue("total-balance");
    setValue("total-balance",totalBalance+depositValue);
})