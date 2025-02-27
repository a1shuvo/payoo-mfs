document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = getInputValueByID("account-number");
    const pin = parseInt(getInputValueByID("pin"));
    const amount = parseFloat(getInputValueByID("amount"));

    const mainBalance = parseFloat(getInnerTextByID("main-balance"));


    if (accountNumber.length === 11 && pin === 1122 && amount > 0) {
        const sum = mainBalance + amount;
        setInnerText("main-balance", sum);
        setInputValue("amount", "");
        alert("Transaction Successful!");

        let transactionList = document.querySelector('section#transaction-history > div');
        let newDiv = document.createElement('div');
        newDiv.innerHTML =  `
            <div class="bg-white flex justify-between items-center px-4 py-2 rounded-lg shadow-sm cursor-pointer">
                <img class="w-6" src="./assets/icons/wallet 1.png" alt="">
                <div>
                    <h4>Add Money</h4>
                    <p class="text-xs">${getFormattedTime()}</p>
                </div>
                <p class="text-green-500 font-bold">$${amount}</p>
            </div>
        `;

        transactionList.prepend(newDiv);


    } else {
        alert("Invalid Transaction!");
    }

});