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
            alert("Conglatulation Oparation Successfull")
        }
        else {
            alert("Oi bata Email (roctim@bank.com) eita da ar pass(asdasd) eita da")
        }
    });