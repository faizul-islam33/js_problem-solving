document.getElementById('double').addEventListener('click', function () {

    const inputField = document.getElementById('input-field');
    const valueInputFieldString = inputField.value;
    const valueInputField = parseFloat(valueInputFieldString);


    inputField.value = '';

    if (isNaN(valueInputField)) {
        alert('Please enter a valid number');
        return;
    }

    const view = document.getElementById('view');
    view.innerText = valueInputField * 2;



})


document.getElementById('triple').addEventListener('click', function () {

    const inputField = document.getElementById('input-field');
    const valueInputFieldString = inputField.value;
    const valueInputField = parseFloat(valueInputFieldString);


    inputField.value = '';

    if (isNaN(valueInputField)) {
        alert('Please enter a valid number');
        return;
    }

    const view = document.getElementById('view');
    view.innerText = valueInputField * 3;



})