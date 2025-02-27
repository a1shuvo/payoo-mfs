function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    return value;
}

function setInputValue(id, value) {
    document.getElementById(id).value = value;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// Function to format the time and date
function getFormattedTime() {
    const now = new Date();

    // Short date format (27-Feb-2025)
    const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    // Time format (01:44 PM)
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    // Combine the formatted date and time
    return `${date}, ${time}`;
}

