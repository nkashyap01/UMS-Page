const testBtn = document.getElementById("testbtn");

testBtn.addEventListener("click", function () {
  const userid = document.querySelector(".edit .one form #userid").value;

  const userpass = document.querySelector(
    ".edit .one form #userpassword"
  ).value;

  if (userid == "12208483" && userpass == "neha123") {
    window.open("/big/index.html");
  } else if (userid == "12205884" && userpass == "riya123") {
    window.open("/big/index.html");
  } else if (userid == "12210885" && userpass == "supriya123") {
    window.open("/big/index.html");
  } else {
    alert("username or password is incorrect ❌");
  }
});
