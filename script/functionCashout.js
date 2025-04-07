document.getElementById("btn-cashout").addEventListener("click", function (event) {
    event.preventDefault();

    const pin = getInputValueByID("pin-number-cashout");
    const amount = getInputValueByID("cashout-amount");

    const mainAmount = getInnerTextByID("main-amount");

    const accountNumber = document.getElementById("Account-Number").value;

    if (accountNumber.length === 11) {
        if (pin === 1234) {
            const sum = mainAmount - amount;
            //    document.getElementById("main-amount").innerText = sum; // without function;
            setInnerTextByIDandvalue("main-amount", sum) //with function;
        } else {
            alert("pin is not correct")
        }
    } else {
        alert("account number is not correct")
    }


})