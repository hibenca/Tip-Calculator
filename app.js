

function calculator() {
    let billAmount = document.getElementById('billAmount').value;
    let people = document.getElementById('people').value;
    document.getElementById('results1').innerHTML = ('$' + billAmount * .1 / people);
    document.getElementById('results2').innerHTML = ('$' + billAmount * .2 / people);
    document.getElementById('results3').innerHTML = ('$' + billAmount * .5 / people);
};