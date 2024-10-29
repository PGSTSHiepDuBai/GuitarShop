
//Danh mục Guitarsale
document.addEventListener('DOMContentLoaded', function() {
    var toggleIcon = document.getElementById('toggleIcon');
    var menu = document.getElementById('menu');

    toggleIcon.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    // Đóng menu khi nhấp bên ngoài menu
    document.addEventListener('click', function(event) {
        if (!toggleIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });
});

function increaseAmount(){
    let amountInput = document.getElementById("AmountValue");
    let amount = parseInt(amountInput.value);

    amountInput.value = amount + 1;
}

function decreaseAmount(){
    let amountInput = document.getElementById("AmountValue");
    let amount = parseInt(amountInput.value);
    if(amount > 1){
        amountInput.value = amount - 1;
    }
    
}

//button scroll trang liên hệ
// const scrollUpButton = document.getElementById('scroll-up');

// scrollUpButton.addEventListener('click', function() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
//   scrollUpButton.style.display = 'none';
// });

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 100) {
//     scrollUpButton.style.display = 'block';
//   } else {
//     scrollUpButton.style.display = 'none';
//   }
// });

// if (window.scrollY === 0) {
//   scrollUpButton.style.display = 'none';
// }

//val
function validateForm(){
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var phone = phoneInput.value;
    var result = true;

    if(name === ''){
        nameErrorMessage.textContent = 'Vui lòng nhập tên của bạn.';
        result = false;
    }
    if(email === ''){
        emailErrorMessage.textContent = 'Vui lòng nhập email.';
        result =false;
    }
    else if(!validateEmail(emailInput.value)){
        emailErrorMessage.textContent = 'Vui lòng nhập một email hợp lệ.';
        result
    }
    if(password === ''){
        passwordErrorMessage.textContent = 'Vui lòng nhập password.';
        result  = false;
    }
    if(phone ===''){
        phoneErrorMessage.textContent = 'Vui lòng nhập số điện thoại.';
        result = false;
    }
    else if(phone.length > 10){
        phoneErrorMessage.textContent = 'Vui lòng nhập không quá 10 kí tự số.';
        result = false;
    }
    else if(phone.length < 10){
        phoneErrorMessage.textContent = 'Vui lòng nhập đủ 10 kí tự số.';
        result = false;
    }
    else if(phone[0] != 0){
        phoneErrorMessage.textContent = 'Chữ số bắt đầu phải là 0.';
        result = false;
    }
    else if(isNaN(phone)){
        phoneErrorMessage.textContent = 'Chỉ được nhập số và không chứa kí tự đặc biệt.';
        result = false;
    }
    if(result){
        alert('Đăng ký thành công');
    }
}

function validateEmail(email){
    var regEX = /\S+@\S+\.\S+/; // 
    return regEX.test(email);
}
