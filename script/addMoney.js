document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = getInputValueByID("account-number");
    const pin = parseInt(getInputValueByID("pin"));
    const amount = parseFloat(getInputValueByID("amount"));

    const mainBalance = parseFloat(getInnerTextByID("main-balance"));


    // alert(amount);

    if (accountNumber.length === 11 && pin === 1122 && amount > 0) {
        const sum = mainBalance + amount;
        setInnerText("main-balance", sum);
        setInputValue("amount", "");
        alert("Transaction Successful!")
    } else {
        alert("Invalid Transaction!");
    }

});