document.getElementById("mybutton").onclick = function(){
    
    const checkbox = document.getElementById("mycheckbox")
    const radioboxvisa = document.getElementById("myradiovisa")
    const radioboxpaypal = document.getElementById("myradiopaypal")
    const radioboxgopay = document.getElementById("myradiogopay")
    if(checkbox.checked){
        console.log("You are subscribed!")
    }else{
        console.log ("You aren't Subscribed!")
    }


    if(radioboxvisa.checked) {
        console.log("You Have A Visa!")
    }
    else if (radioboxpaypal.checked){
        console.log ("You Have A Paypal!")
    }
    else if (radioboxgopay.checked){
        console.log ("You have A Gopay")

    }
    else{
        console.log ("You must select a payment type!")
    }
       
}