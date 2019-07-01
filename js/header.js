let dis = 0;
document.querySelector(".login_icon").addEventListener("click",login);

function login() {
  let x = document.querySelector("fieldset.login");
  if (dis === 0) {
  x.style.display = "inline-block";
  dis = 1;
  }
  else
  {
    x.style.display = "none";
    dis = 0;
  }
}

function loginc() {
  let x = document.querySelector("fieldset.login");
  x.style.display= "none";
  dis = 0;
}