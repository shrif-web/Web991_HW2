fillFormRegister = function () {
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
            <button id="submit-button" type="button" class="btn btn-primary btn-sm btn-block" onclick="checkFormRegister()">ثبت نام</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.add("active")
    element = document.getElementById("loginTab")
    element.classList.remove("active")

}
fillFormLogin = function () {
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
            <button id="submit-button" type="button" class="btn btn-primary btn-sm btn-block" onclick="checkFormLogin()">ورود</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.remove("active")
    element = document.getElementById("loginTab")
    element.classList.add("active")
}

showAlert = function (str, type) {
    var element = document.getElementById("alertContainer")
    element.innerHTML = `
    <div id = "alertBox1" class="alert alert-${type} alert-dismissible fade show fade-in  align-item-center form-group mx-sm-3" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="closeAlert()">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>${str}</strong>
    </div>`
}

closeAlert = function () {
    var element = document.getElementById('alertBox1')
    element.alert('close')
}

checkFormRegister = function () {
    let alert = document.getElementById("alertContainer")
    alert.innerHTML = ``
    let email = document.getElementById('email').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let repeatPassword = document.getElementById('exampleInputPassword2').value;
    let agreeTerms = document.getElementById("check-rules").checked;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

checkFormLogin = function () {
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

setup = function () {
    fillFormLogin();
    loadStartingAnimation();
}

loadStartingAnimation = function () {
    let start = Date.now();
    let note = document.getElementById('note');
    let timer = setInterval(frame, 20);
    let navbar = document.getElementById('top-navbar');
    let div1 = document.getElementById('div1');
    let body = document.getElementById('body');
    let password = document.getElementById('exampleInputPassword1');
    let imageBlue = document.getElementById('image-blue');
    let imageRed = document.getElementById('image-red');
    let logregdiv = document.getElementById('logregdiv');

    function frame() {
        let duration = 1500;
        let passedTime = Date.now() - start;
        if (passedTime >= duration) {
            clearInterval(timer);
        } else {
            note.innerText = passedTime;
            navbar.style.opacity = passedTime / duration;
            imageBlue.style.left = -duration / 5 + passedTime / 5 + 'px';
            imageBlue.style.opacity = passedTime / duration;
            logregdiv.style.opacity = passedTime / duration;
            logregdiv.style.right = -duration / 5 + passedTime / 5 + 'px';
            }
    }
}

loadEndingAnimation = function (duration) {
    let start = Date.now();
    let note = document.getElementById('note');
    let timer = setInterval(frame, 20);
    let navbar = document.getElementById('top-navbar');
    let div1 = document.getElementById('div1');
    let body = document.getElementById('body');
    let password = document.getElementById('exampleInputPassword1');
    let imageBlue = document.getElementById('image-blue');
    let imageRed=document.getElementById('image-red')
    let logregdiv = document.getElementById('logregdiv');

    function frame() {
        let passedTime = Date.now() - start;
        if (passedTime >= duration) {
            clearInterval(timer);
        } else {
            note.innerText = passedTime;
            navbar.style.opacity = 1 - passedTime / duration
            imageBlue.style.left = (-duration / 5) - (-duration / 5 + passedTime / 5) + 'px'
            imageBlue.style.opacity = 1 - passedTime / duration
            imageRed.style.left = (-duration / 5) - (-duration / 5 + passedTime / 5) + 'px'
            imageRed.style.opacity = 1 - passedTime / duration
            logregdiv.style.right = (-duration / 5) - (-duration / 5 + passedTime / 5) + 'px'
            logregdiv.style.opacity = 1 - passedTime / duration
        }
    }
}

backToHome = function () {
    let duration = 1500
    loadEndingAnimation(duration)
    note = document.getElementById('note')
    setTimeout(() => {
        // todo: change below line
        window.location.href = "./index.html"
    }, duration + 300);
}

changeDir = function (elem) {
    if (!elem.value) {
        elem.dir = "rtl"
    } else {
        elem.dir = "ltr"
    }
}

toggleDark = function () {
    document.getElementById("main-body").classList.toggle("dark-mode")
}