fillFormRegister = function () {
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style = "margin-top: 10px;">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ایمیل">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="تکرار رمز عبور">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
                <label class="form-check-label" for="invalidCheck2">
                  قوانین و شرایط را می‌پذیرم
                </label>
            </div>              
            <button type="submit" class="btn btn-primary btn-sm btn-block" onclick="checkFormRegister()">ثبت نام</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.add("active")
    element.style.backgroundColor = "white"
    element = document.getElementById("loginTab")
    element.classList.remove("active")
    element.style.backgroundColor = "#acb3fa"
}
fillFormLogin = function () {
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style="margin-top:55px;">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ایمیل">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور">
            </div>
            <button type="submit" class="btn btn-primary btn-sm btn-block" onclick="checkFormLogin()">ورود</button>
        </div>
    </form>`
    var element = document.getElementById("loginTab")
    element.classList.add("active")
    element.style.backgroundColor = "white"
    element = document.getElementById("registerTab")
    element.classList.remove("active")
    element.style.backgroundColor = "#acb3fa"
}

showAlert = function (str) {
    var element = document.getElementById("alertContainer")
    element.innerHTML = `<div id = "alertBox1 align-item-center" class="alert alert-info alert-dismissible fade show fade-in" role="alert">
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
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var repeatPassword = document.getElementById('exampleInputPassword2').value;
    var agreeTerms = document.getElementById('invalidCheck2').checked;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!agreeTerms) {
        showAlert('لطفا قوانین و شرایط را قبول کنید');
    }
    else if (!emailRegex.test(email)) {
        showAlert('فرمت ایمیل ورودی صحیح نمی‌باشد');
    }
    else if (password != repeatPassword) {
        showAlert('رمز عبور و تکرار آن یکسان نمی‌باشد');
    }
}

checkFormLogin = function () {
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        showAlert('فرمت ایمیل ورودی صحیح نمی‌باشد');
    }
    else if (email != '1111@gmail.com') {
        showAlert('ایمیل ورودی صحیح نمی‌باشد');
    }
    else if (password != '1111') {
        showAlert('رمز عبور صحیح نمی‌باشد‌');
    }
}
