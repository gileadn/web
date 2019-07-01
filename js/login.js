function check() {
  let u = document.forms["log_form"]["username"].value;
  if (u.length < 6)
  {
    alert("Username has to be at least 6 characters");
    return false;
  }
  let p = document.forms["log_form"]["password"].value;
  if (p.length < 6)
  {
    alert("Password has to be at least 6 characters");
    return false;
  }
}