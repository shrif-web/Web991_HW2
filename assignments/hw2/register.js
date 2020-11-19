fillFormRegister = function() {
    var alert = document.getElementById("alertContainer")
    alert.innerHTML = ``
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style = "margin-top: 10px;">
                <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="ایمیل" oninput="changeDir(this)">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور" oninput="changeDir(this)">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="تکرار رمز عبور" oninput="changeDir(this)">
            </div>
            <div class="form-check">
                <input id="check-rules" class="form-check-input" type="checkbox" value="">
                <label id="check-rules-label" class="form-check-label" for="check-rules">
                  قوانین و شرایط را می‌پذیرم
                </label>
            </div>              
            <button id="submit-button" type="submit" class="btn btn-primary btn-sm btn-block" onclick="checkFormRegister()">ثبت نام</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.add("active")
    element = document.getElementById("loginTab")
    element.classList.remove("active")

}
fillFormLogin = function() {
    var alert = document.getElementById("alertContainer")
    alert.innerHTML = ``
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style="margin-top:55px;">
                <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="ایمیل" oninput="changeDir(this)">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور" oninput="changeDir(this)">
            </div>
            <button id="submit-button" type="submit" class="btn btn-primary btn-sm btn-block" onclick="checkFormLogin()">ورود</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.remove("active")
    element = document.getElementById("loginTab")
    element.classList.add("active")
}

showAlert = function(str, type) {
    var element = document.getElementById("alertContainer")
    element.innerHTML = `
    <div id = "alertBox1" class="alert alert-${type} alert-dismissible fade show fade-in  align-item-center form-group mx-sm-3" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="closeAlert()">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>${str}</strong>
    </div>`
}

closeAlert = function() {
    var element = document.getElementById('alertBox1')
    element.alert('close')
}

checkFormRegister = function() {
    let alert = document.getElementById("alertContainer")
    alert.innerHTML = ``
<<<<<<< HEAD
    let email = document.getElementById('email').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let repeatPassword = document.getElementById('exampleInputPassword2').value;
    let agreeTerms = document.getElementById('invalidCheck2').checked;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
=======
    var email = document.getElementById('email').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var repeatPassword = document.getElementById('exampleInputPassword2').value;
    var agreeTerms = document.getElementById('check-rules').checked;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
>>>>>>> 495faa7d7bfc50b6802510a2f7b84a30c1924505
    if (!email) {
        showAlert('ایمیل خالی می‌باشد.', 'danger')
    } else if (!emailRegex.test(email)) {
        showAlert('فرمت ایمیل ورودی صحیح نمی‌باشد', 'danger');
    } else if (!password) {
        showAlert('رمز عبور خالی می‌باشد.', 'danger')
    } else if (!repeatPassword) {
        showAlert('تکرار رمز عبور خالی می‌باشد.', 'danger')
    } else if (password != repeatPassword) {
        showAlert('رمز عبور و تکرار آن یکسان نمی‌باشد', 'danger');
    } else if (!agreeTerms) {
        showAlert('لطفا قوانین و شرایط را قبول کنید', 'danger');
    } else {
        showAlert('ثبت‌نام موفقیت آمیز بود', 'success')
    }
}

checkFormLogin = function() {
    let alert = document.getElementById("alertContainer")
    alert.innerHTML = ``
    let email = document.getElementById('email').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
        showAlert('ایمیل خالی می‌باشد.', 'danger')
    } else if (!emailRegex.test(email)) {
        showAlert('فرمت ایمیل ورودی صحیح نمی‌باشد', 'danger');
    } else if (!password) {
        showAlert('رمز عبور خالی می‌باشد.', 'danger')
    } else if (email != '1111@gmail.com') {
        showAlert('ایمیل ورودی صحیح نمی‌باشد', 'danger');
    } else if (password != '1111') {
        showAlert('رمز عبور صحیح نمی‌باشد‌', 'danger');
    } else {
        showAlert('ورود موفقیت آمیز بود', 'success')
    }
}

setup = function() {
    fillFormLogin();
    // load animations
    let start = Date.now();
    let note = document.getElementById('note');
    let timer = setInterval(frame, 20);
    let navbar = document.getElementById('top-navbar');
    let div1 = document.getElementById('div1');
    let body = document.getElementById('body');
    let password = document.getElementById('exampleInputPassword1');
    let image = document.getElementById('image1');
    let formDiv = document.getElementById('formDiv');

    function frame() {
        let duration = 1500;
        let passedTime = Date.now() - start;
        if (passedTime >= duration) {
            clearInterval(timer);
        } else {
            navbar.style.opacity = passedTime / duration;
            div1.style.height = passedTime / duration + '%';
            // body.style.backgroundColor = `rgb(${232 * passedTime / duration}, ${239 * passedTime / duration}, 247)`;
            image.style.left = -duration / 5 + passedTime / 5 + 'px';
            image.style.opacity = passedTime / duration;
            formDiv.style.opacity = passedTime / duration;
            formDiv.style.right = -duration / 5 + passedTime / 5 + 'px';
            // navbar.style. = passedTime / 10 + 'px';
            // password.style.width = passedTime / 10;
            // password.style.left = passedTime / 10;
            // note.innerText = password.style.left;
            // note.innerText = password.style.opacity;
        }
    }
}

backToHome = function() {
    window.location.href = "file:///home/sepehr/university/13991/Web%20Programming/repository/WebFall2020/assignments/hw2/index.html"
}

changeDir = function(elem) {
    if (!elem.value) {
        elem.dir = "rtl"
    } else {
        elem.dir = "ltr"
    }
}

toggleDark = function(){
    document.getElementById("main-body").classList.toggle("dark-mode")
}