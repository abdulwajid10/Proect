arr = []; //array

function submitValue() {
    let btnValue = document.getElementById('create-input').value;
    arr.unshift(btnValue);
    showValue();

}


function showValue() {
    let template = "";
    for (let i = 0; i < arr.length; i++) {
        template = template +
            `<div class="result">
            <h2>${i}: ${arr[i]}</h2>
            <div class="btn">
                <button type="button" onclick="updateValue(${i})">Update</button>
                <button type="button" onclick="deleteValue(${i})">Delete</button>
            </div>
        </div>
        <br>`

    }
    document.getElementById('output').innerHTML = template;
}

function deleteValue(i) {
    arr.splice(i, 1);
    showValue();
}

function updateValue(i) {
    console.log(i);
    btnValue = document.getElementById('create-input').value = arr[i]; //set the selected value in input text bar
    console.log(arr[i]);
    showValue();
}