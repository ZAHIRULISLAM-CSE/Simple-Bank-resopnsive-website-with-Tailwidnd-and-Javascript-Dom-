function getInputFieldValue(id){
   let stringValue= document.getElementById(id).value;
   document.getElementById(id).value="";
   if(stringValue<0){
      alert("money value cant be negative");
      return 0;
   }
   if(isNaN(stringValue)){
        alert("provide valid input");
        return 0;
   }
   const value=parseFloat(stringValue);
   return value;
}
function getTextFieldValue(id){
    let stringValue= document.getElementById(id).innerHTML;
    const value=parseFloat(stringValue);
    return value;
}
function setValue(id,totalValue){
    document.getElementById(id).innerHTML=totalValue;
}