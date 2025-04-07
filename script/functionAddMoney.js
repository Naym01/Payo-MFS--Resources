document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();
    //   function call: this three items

    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const mainAmount = getInnerTextByID("main-amount")
    // console.log(amount,pin, mainAmount)


    const account = document.getElementById("Account-Number").value;

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainAmount + amount;
    
            // document.getElementById("main-amount").innerText = sum;     // its work without function.
            setInnerTextByIDandvalue("main-amount",sum)
        

        } else {
            alert("pin number thik nai")
        }

    } else {
        alert("account number is wrong")

    }
});