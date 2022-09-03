let NotifyButton= document.getElementById("NotifyButton");
let EmailValue = document.getElementById("EmailText");
let ErrorText = document.getElementById("Error");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

NotifyButton.addEventListener('click', ()=>{

    if(EmailValue.value.match(mailformat))
    {
        console.log("You Provide Valid Email Address.")
    }
    else{
        EmailValue.style.border = "1px solid hsl(354, 100%, 66%)"
        ErrorText.style.visibility = "visible";
    }
    

})