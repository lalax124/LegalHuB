document.addEventListener("DOMContentLoaded", () => {
    const loginToggle = document.getElementById("login-toggle");
    const registerToggle = document.getElementById("register-toggle");
    const switchToRegister = document.getElementById("switch-to-register");
    const switchToLogin = document.getElementById("switch-to-login");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginToggle && registerToggle && loginForm && registerForm) {
        loginToggle.addEventListener("click", () => {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
            loginToggle.classList.add("active");
            registerToggle.classList.remove("active");
        });

        registerToggle.addEventListener("click", () => {
            registerForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
            registerToggle.classList.add("active");
            loginToggle.classList.remove("active");
        });
    }

    if (switchToRegister && registerToggle) {
        switchToRegister.addEventListener("click", () => {
            registerToggle.click();
        });
    }

    if (switchToLogin && loginToggle) {
        switchToLogin.addEventListener("click", () => {
            loginToggle.click();
        });
    }
});
