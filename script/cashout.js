document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    
    const agentNumber = getInputValueByID("agent-number");
    const cashoutAmount = parseFloat(getInputValueByID("cashout-amount"));
    const cashoutPin = parseInt(getInputValueByID("cashout-pin"));
    const mainBalance = parseFloat(getInnerTextByID("main-balance"));

   

    if (agentNumber.length === 11 && cashoutPin === 1122 && cashoutAmount > 0 && mainBalance >= cashoutAmount) {
        const sum = mainBalance - cashoutAmount;
        setInnerText("main-balance", sum);
        setInputValue("cashout-amount", "");
        alert("Transaction Successful!");

        let transactionList = document.querySelector('section#transaction-history > div');
        let newDiv = document.createElement('div');
        newDiv.innerHTML =  `
            <div class="bg-white flex justify-between items-center px-4 py-2 rounded-lg shadow-sm cursor-pointer">
                <img class="w-6" src="./assets/icons/send 1.png" alt="">
                <div>
                    <h4>Cash Out</h4>
                    <p class="text-xs">${getFormattedTime()}</p>
                </div>
                <p class="text-red-500 font-bold">$${cashoutAmount}</p>
            </div>
        `;

        transactionList.prepend(newDiv);
        
    } else {
        alert("Invalid Transaction!");
    }
});