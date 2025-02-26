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

