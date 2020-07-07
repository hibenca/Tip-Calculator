

function calculator() {
    let billAmount = document.getElementById('billAmount').value;
    let people = document.getElementById('people').value;


    if (billAmount <= 0) {
        alert("Please fill out the amount");
    } else {
        document.getElementById('results1').innerHTML = ('$' + (billAmount * .1 / people).toFixed(2));
        document.getElementById('results2').innerHTML = ('$' + (billAmount * .2 / people).toFixed(2));
        document.getElementById('results3').innerHTML = ('$' + (billAmount * .5 / people).toFixed(2));
        document.getElementById('totalTip').style.display = "block";
    };

};