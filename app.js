

function calculator() {
    let billAmount = document.getElementById('billAmount').value;
    document.getElementById('results1').innerHTML = ('$' + billAmount * .1);
    document.getElementById('results2').innerHTML = ('$' + billAmount * .2);
    document.getElementById('results3').innerHTML = ('$' + billAmount * .5);
};