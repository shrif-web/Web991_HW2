fillFormRegister = function(){
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style = "margin-top: 10px;">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ایمیل">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="تکرار رمز عبور">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
                <label class="form-check-label" for="invalidCheck2">
                  قوانین و شرایط را می‌پذیرم
                </label>
            </div>              
            <button type="submit" class="btn btn-primary btn-sm btn-block" onclick="checkForm()">ثبت نام</button>
        </div>
    </form>`
    var element = document.getElementById("registerTab")
    element.classList.add("active")
    element.style.backgroundColor = "white"
    element = document.getElementById("loginTab")
    element.classList.remove("active")
    element.style.backgroundColor = "#acb3fa"
}
fillFormLogin = function(){
    document.getElementById("logRegForm").innerHTML = `<form>
        <div class = "form-group align-items-center mx-sm-3">
            <div class="form-group" style="margin-top:55px;">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ایمیل">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="رمز عبور">
            </div>
            <button type="submit" class="btn btn-primary btn-sm btn-block">ورود</button>
        </div>
    </form>`
    var element = document.getElementById("loginTab")
    element.classList.add("active")
    element.style.backgroundColor = "white"
    element = document.getElementById("registerTab")
    element.classList.remove("active")
    element.style.backgroundColor = "#acb3fa"
}

showAlert = function(){
    var element = document.getElementById("alertContainer")
    element.innerHTML = `<div id = "alertBox1 align-item-center" class="alert alert-info alert-dismissible fade show fade-in" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="closeAlert()">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>خطا</strong>
    </div>`
}
closeAlert = function(){
    var element = document.getElementById("alertBox1")
    element.alert('close')
}
checkForm = function(){
    //todo
    showAlert() 
}