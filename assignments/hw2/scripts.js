setup = function () {
  document
    .getElementById("homePage")
    .addEventListener("click", () => fillGrid());
  document
    .getElementById("dataPage")
    .addEventListener("click", () => loadTable());
  document
    .getElementById("customSwitches")
    .addEventListener("click", () => toggleDarkMode());
  document.documentElement.scrollTop = 0;
};

function toggleDarkMode() {
  console.log(document.body.classList);
  document.body.classList.toggle("dark-mode");
  console.log(document.body.classList);
  // logo change to red:
  let logo = document.getElementById("logo");
  logo.src = toggleValue(logo.src, "blue", "red");
  // nav buttons go red
  let loginButton = document.getElementById("loginButton");
  let signupButton = document.getElementById("signupButton");
  loginButton.className = toggleValue(
    loginButton.className,
    "danger",
    "primary"
  );
  signupButton.className = toggleValue(
    signupButton.className,
    "danger",
    "primary"
  );
  // prev/next buttons in the panel go red
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  prevButton.className = toggleValue(prevButton.className, "danger", "primary");
  nextButton.className = toggleValue(nextButton.className, "danger", "primary");
}

toggleValue = (template, value1, value2) => {
  return template.includes(value1)
    ? template.replace(value1, value2)
    : template.replace(value2, value1);
};

fillGrid = function () {
  document.getElementById("homePage").style.borderBottom = "thick solid";
  document.getElementById("dataPage").style.borderBottom = "none";
  //
  let template = "";
  for (let i = 0; i < 20; i++) {
    template += `<span class="card" style="width: 15rem;">
  <img class="card-img-top" src="./assets/multi_logo_200x200.png" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Card ${i + 1}</p>
  </div>
</span>`;
  }
  document.getElementById("dataTable").innerHTML = "";
  document.getElementById("dataGrid").innerHTML = template;
  document.getElementById("panelButtons").style.display = "flex";
};

loadTable = () => {
  document.getElementById("dataPage").style.borderBottom = "thick solid";
  document.getElementById("homePage").style.borderBottom = "none";
  //
  let data = getTableData();
  let template = `<table class='table table-striped' aria-labelledby="tableLabel">
  <thead>
    <tr>
      <th>رتبه</th>
      <th>نام تیم</th>
      <th>نام دانشگاه و کشور</th>
      <th>امتیاز</th>
    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < data.length; i++) {
    template += `<tr>
      <td>${data[i].ranking}</td>
      <td>${data[i].name}</td>
      <td>${data[i].from}</td>
      <td>${data[i].score}</td>
    </tr>`;
  }
  template += `</tbody>
</table>
`;
  document.getElementById("dataGrid").innerHTML = "";
  document.getElementById("dataTable").innerHTML = template;
  document.getElementById("panelButtons").style.display = "flex";
};

function getTableData() {
  return [
    {
      name: "کوشا‌ جان",
      ranking: 1,
      from: "دانشگاه صنعتی شریف، ایران",
      score: 1305,
    },
    {
      name: "مبارزین نتها",
      ranking: 2,
      from: "دانشگاه امیرکبیر، ایران",
      score: 1270,
    },
    {
      name: "حاجی درچه‌ای",
      ranking: 3,
      from: "دانشگاه علوم پزشکی اصفهان، اصفهان",
      score: 1250,
    },
    {
      name: "عدالت و آزادی",
      ranking: 4,
      from: "دانشگاه آزاد قزوین، ایران",
      score: 1105,
    },
    {
      name: "Beatles",
      ranking: 5,
      from: "دانشگاه ملی شوچنکو، اوکراین",
      score: 940,
    },
    {
      name: "الگل",
      ranking: 6,
      from: "دانشگاه آزاد اسلامی واحد علوم تحقیقات، تهران",
      score: 925,
    },
    {
      name: "عمال مناجم البيانات",
      ranking: 7,
      from: "دانشگاه علم و صنعت اردن، اردن",
      score: 870,
    },
  ];
}

toggleSidebar = function () {
  let element = document.getElementById("sidebar");
  element.classList.toggle("active");
};
