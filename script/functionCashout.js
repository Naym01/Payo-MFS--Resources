document.getElementById("btn-cashout").addEventListener("click", function (event) {
    event.preventDefault();

    const pin = getInputValueByID("pin-number-cashout");
    const amount = getInputValueByID("cashout-amount");

    const mainAmount = getInnerTextByID("main-amount");

    const accountNumber = document.getElementById("Account-Number").value;

    if(amount>mainAmount){
        alert("invalid amount")
        return;
    }

    if (accountNumber.length === 11) {
        if (pin === 1234) {
            const sum = mainAmount - amount;
            //    document.getElementById("main-amount").innerText = sum; // without function;
            setInnerTextByIDandvalue("main-amount", sum) //with function;

            const container = document.getElementById("transection-history")
            const p = document.createElement("p");
            p.innerText = `
            cashout ${amount} money to this ${accountNumber} account
            `
     container.appendChild(p);
        } else {
            alert("pin is not correct")
        }
    } else {
        alert("account number is not correct")
    }


}) 