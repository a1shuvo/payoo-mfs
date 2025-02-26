function displayToggle(id, status) {
    document.getElementById(id).style.display = status;
}

displayToggle("add-money", "none");
displayToggle("cashout", "none");
displayToggle("transaction-history", "block");

const addMoneyBox = document.getElementById("add-money-box");
const cashoutBox = document.getElementById("cashout-box");
const transactionsBox = document.getElementById("transactions-box");

const transactionBtns = document.getElementById("transaction-btns");

transactionBtns.addEventListener("click", function (event) {
    // Check if the clicked target is a div, img, or p element
    if (event.target && event.target.matches('div, img, p')) {
        
        // Get all divs and p elements inside the transactionBtns container
        const divs = transactionBtns.querySelectorAll('div, p');
        
        // Loop through the elements and reset their classes
        divs.forEach(item => {
            item.classList.remove('bg-blue-200');
            item.classList.replace('border-blue-500', 'border-gray-400');
            item.classList.replace('text-blue-500', 'text-gray-500');
        });

        // If the clicked target is a div, update it
        const clickedDiv = event.target.closest('div');
        if (clickedDiv) {
            clickedDiv.classList.add('bg-blue-200');
            clickedDiv.classList.replace('border-gray-400', 'border-blue-500');

            const pInsideDiv = clickedDiv.querySelector('p');
            pInsideDiv.classList.replace('text-gray-500', 'text-blue-500');
        }

    }
});

addMoneyBox.addEventListener("click", function () {
    displayToggle("add-money", "block");
    displayToggle("cashout", "none");
    displayToggle("transaction-history", "none");
});

cashoutBox.addEventListener("click", function () {
    displayToggle("add-money", "none");
    displayToggle("cashout", "block");
    displayToggle("transaction-history", "none");
});

transactionsBox.addEventListener("click", function () {
    displayToggle("add-money", "none");
    displayToggle("cashout", "none");
    displayToggle("transaction-history", "block");
});