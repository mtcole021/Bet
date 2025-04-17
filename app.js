// Login and registration
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ورود موفقیت‌آمیز!');
});

document.getElementById('register-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ثبت‌نام موفقیت‌آمیز!');
});

// Balance update and charge account
document.querySelector(".charge-btn")?.addEventListener("click", function() {
    alert("حساب شما شارژ شد!");
});

// Simulate game play (update balance on win/loss)
document.querySelectorAll(".start-btn")?.forEach(button => {
    button.addEventListener("click", function() {
        const balance = document.getElementById("balance");
        balance.innerHTML = parseInt(balance.innerHTML) + 100; // Just a simulation of winnings
        alert("شما برنده شدید! موجودی شما به‌روزرسانی شد.");
    });
});
