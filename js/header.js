let dis = 0;

function login() {
  let x = document.querySelector("form.login");
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
  let x = document.querySelector("form.login");
  x.style.display= "none";
  dis = 0;
}