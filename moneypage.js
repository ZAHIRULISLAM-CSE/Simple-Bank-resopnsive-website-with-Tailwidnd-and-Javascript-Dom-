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
})
