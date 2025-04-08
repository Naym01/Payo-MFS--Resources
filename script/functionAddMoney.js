document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();
    //   function call: this three items

    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const mainAmount = getInnerTextByID("main-amount")
    // console.log(amount,pin, mainAmount)


    const account = document.getElementById("Account-Number").value;
    const selectedBank = document.getElementById("allbank").value;
    console.log(selectedBank)


    if (amount < 0) {
        alert("please give positive amount")
        return;
    }

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainAmount + amount;

            // document.getElementById("main-amount").innerText = sum;     // its work without function.
            setInnerTextByIDandvalue("main-amount", sum)

            // // transaction history innerText part:

            // const container = document.getElementById("transection-history")
            // const p = document.createElement("p");
            // p.innerText = `
            // added ${amount} money to this ${account} account
            // `
            // container.appendChild(p);

            //transaction history innerHtml part:

            const container = document.getElementById("transection-history")
            const div = document.createElement("div");
            div.classList.add("bg-red-400")
            div.innerHTML =`
            <h1 class="text-yellow-300">Added Money ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>Account Number: ${account } </p> 
            `
          container.appendChild(div)


        } else {
            alert("pin number thik nai")
        }

    } else {
        alert("account number is wrong")

    }
});