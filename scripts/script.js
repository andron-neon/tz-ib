document.getElementById("main-button").onclick = function () {
    if (document.getElementById("main-input").value === "") {
        alert("Укажите, пожалуйста, Ваш номер телефона")
    } else {
        alert("Спасибо за заказ, мы свяжемся с Вами в ближайшее время!")
    }
}
// document.getElementById("main-input").reset();
require('/scripts/script.js');
require('/css/styles.css');
require('/index.html');