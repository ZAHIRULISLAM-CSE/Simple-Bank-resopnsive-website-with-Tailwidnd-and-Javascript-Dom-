document.getElementById("btn-submit").addEventListener("click",function(){
   const emailValue=document.getElementById("email-field").value;
   const passwordValue=document.getElementById("password-field").value;
   if(emailValue=="joy@gmail.com" && passwordValue == "1234"){
       window.location.href="moneypage.html";
   }
   else{
    alert("Provide Valid Email and Password");
   }
   document.getElementById("email-field").value="";
   document.getElementById("password-field").value="";  
})