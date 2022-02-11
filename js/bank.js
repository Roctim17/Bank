document.getElementById('deposit').addEventListener("click", function () {
    const userDepositInput = document.getElementById('deposite-input');
    const depositInput = userDepositInput.value;


    const deposiTotal = document.getElementById('deposit-total');
    const depositFinal = deposiTotal.innerText;

    const totalAmount = document.getElementById('total');
    const totalAmmountFinal = totalAmount.innerText;


    userDepositInput.value = '';
    if (depositInput > 0) {
        deposiTotal.innerText = parseFloat(depositInput) + parseFloat(depositFinal);
        totalAmount.innerText = parseFloat(depositInput) + parseFloat(totalAmmountFinal);
        alert("SuccessFully Added On Your Account")
    }
    else {
        alert("Please Deposite Ammount")
    }


});


document.getElementById('Withdrow').addEventListener("click", function () {
    const userWithderowInput = document.getElementById('withdrow-input');
    const withdrowInput = userWithderowInput.value;

    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowAmount = withdrowTotal.innerText;

    const totalAmmount = document.getElementById('total');
    const totalAmmountFinal = totalAmmount.innerText;



    userWithderowInput.value = '';
    if (parseFloat(totalAmmountFinal) >= parseFloat(withdrowInput) && withdrowInput > 0) {
        withdrowTotal.innerText = parseFloat(withdrowInput) + parseFloat(withdrowAmount);
        totalAmmount.innerText = parseFloat(totalAmmountFinal) - parseFloat(withdrowInput);
        alert("Congratulation! You can withdrow ", withdrowTotal.innerText = parseFloat(withdrowInput) + parseFloat(withdrowAmount), " Doller from Your Account")
    }
    else {
        alert("you have not Money! Please Deposite first")
    }
});