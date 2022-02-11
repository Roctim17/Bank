document.getElementById('login').addEventListener
    ("click", function (event) {
        event.preventDefault()
        const userEmailInput = document.getElementById('user-email');
        const userEmail = userEmailInput.value;
        // password
        const userPasswordInput = document.getElementById('user-password');
        const userpassWord = userPasswordInput.value;
        if (userEmail == 'roctim@bank.com' && userpassWord == 'asdasd') {
            window.location.href = 'bank.html';
        };
    });

document.getElementById('deposit').addEventListener("click", function () {
    const userDepositInput = document.getElementById('deposite-input');
    const depositInput = userDepositInput.value;


    const deposiTotal = document.getElementById('deposit-total');
    const depositFinal = deposiTotal.innerText;

    const totalAmount = document.getElementById('total');
    const totalAmmountFinal = totalAmount.innerText;

    deposiTotal.innerText = parseFloat(depositInput) + parseFloat(depositFinal);
    totalAmount.innerText = parseFloat(depositInput) + parseFloat(totalAmmountFinal);
    userDepositInput.value = '';
});


document.getElementById('Withdrow').addEventListener("click", function () {
    const userWithderowInput = document.getElementById('withdrow-input');
    const withdrowInput = userWithderowInput.value;

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowAmount = withdrowTotal.innerText;

    const totalAmmount = document.getElementById('total');
    const totalAmmountFinal = totalAmmount.innerText;

    withdrowTotal.innerText = parseFloat(withdrowInput) + parseFloat(withdrowAmount);
    totalAmmount.innerText = parseFloat(withdrowInput) + parseFloat(totalAmmountFinal);
    userWithderowInput.value = '';
});