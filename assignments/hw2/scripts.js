setup = function () {
    document.getElementById("loginButton").addEventListener("click", () => fillGrid())
    console.log('ok')
}

fillGrid = function () {
    console.log('done')
    let template = ''
    for (let i = 0; i < 20; i++) {
        template += `<span class="card" style="width: 15rem;">
  <img class="card-img-top" src="./assets/multi_logo_200x200.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Card ${i + 1}</p>
  </div>
</span>`
    }
    document.getElementById("dataGrid").innerHTML = template
}
