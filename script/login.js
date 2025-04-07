document.getElementById("login-btn").addEventListener("click", 
    function (event){
        event.preventDefault();
        const accountNumber = document.getElementById("Account-Number").value;
        
        // console.log("account Number", accountNumber)
     const pinNumber = document.getElementById("pin-number").value;
     const convertedPinNumber = parseInt(pinNumber)
    //  console.log("the pin number is", pinNumber)
    // console.log(accountNumber.length)
    // console.log( typeof pinNumber)
     if (accountNumber.length=== 11){
        console.log(" account Number is correct ")
        if(convertedPinNumber === 1234){
            window.location.href="./main.html"
            // console.log(" pin Number is correct ")
        } else {
            alert(" Pin Number is not correct ")
        }
     } else {
        alert(" need valid account Numbers ")
     }
 
    })
