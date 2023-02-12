// deposit button event start here
document.getElementById("btn-deposit").addEventListener("click",function(){
   let depoMoney= document.getElementById("field-deposit").value;
   document.getElementById("field-deposit").value="";
   if(depoMoney<0){
    alert("deposit money value cant be negative");
    return;
   }
   if(isNaN(depoMoney)){
    alert("provide positive value")
    return;
}
   depoMoney=parseFloat(depoMoney);
    let previousDepo= document.getElementById("total-deposit").innerText;
    previousDepo=parseFloat(previousDepo);
    let currentDepo=depoMoney+previousDepo;
    document.getElementById("total-deposit").innerText=currentDepo;

    let totalBalance= document.getElementById("total-balance").innerText;
    totalBalance=parseFloat(totalBalance);
    totalBalance=totalBalance+depoMoney;
    document.getElementById("total-balance").innerText=totalBalance;
})
//withdraw button event start
document.getElementById("btn-withdraw").addEventListener("click",function(){
   let withdrawMoney= document.getElementById("field-withdraw").value;
   document.getElementById("field-withdraw").value="";
   if(withdrawMoney<0){
    alert("deposit money value cant be negative");
    return;
   }
   if(isNaN(withdrawMoney)){
    alert("provide positive value")
    return;
   }
   withdrawMoney=parseFloat(withdrawMoney);
   let totalBalance= document.getElementById("total-balance").innerText;
    totalBalance=parseFloat(totalBalance);
   if(totalBalance<withdrawMoney){
    alert("not enough money");
    return;
}
   let previousWithdraw= document.getElementById("total-withdraw").innerText;
    previousWithdraw=parseFloat(previousWithdraw);
    let currentWithdraw=withdrawMoney+previousWithdraw;
    document.getElementById("total-withdraw").innerText=currentWithdraw;
    totalBalance=totalBalance-withdrawMoney;
    document.getElementById("total-balance").innerText=totalBalance;
})