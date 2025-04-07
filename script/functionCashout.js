document.getElementById("btn-cashout").addEventListener("click",
    function(event){
        event.preventDefault();

        const accountNumber = document.getElementById("Account-Number").value;
        console.log(accountNumber)

        // const pin = getInputValueByID("pin-number-cashout")
        // const amount = getInputValueByID("cashout-amount")
        // const mainAmount = getInnerTextByID("main-amount")
        // console.log(pin, amount, mainAmount)


    })