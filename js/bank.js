document.getElementById('deposit').addEventListener("click", function () {
    const userDepositInput = document.getElementById('deposite-input');
    const depositInput = userDepositInput.value;


    const deposiTotal = document.getElementById('deposit-total');
    const depositFinal = deposiTotal.innerText;

    const totalAmount = document.getElementById('total');
    const totalAmmountFinal = totalAmount.innerText;

    deposiTotal.innerText = parseFloat(depositInput) + parseFloat(depositFinal);
    totalAmount.innerText = parseFloat(depositInput) + parseFloat(totalAmmountFinal);

});


document.getElementById('withdrow').addEventListener("click", function () {
    const userWithderowInput = document.getElementById('withdrow-input');
    const withdrowInput = userWithderowInput.value;

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowAmount = withdrowTotal.innerText;
    withdrowTotal.innerText = parseFloat(withdrowInput) + parseFloat(withdrowAmount);
});