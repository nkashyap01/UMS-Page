// const testBtn = document.getElementById("testbtn");

// console.log(testBtn);

// testBtn.addEventListener("click", function () {
//   window.open("/big/index.html");
// });

const testBtn = document.getElementById("testbtn");

const username = "12208483";
const password = "neha@123";

testBtn.addEventListener("click", function () {
  const userid = document.querySelector(".edit .one form #userid").value;

  const userpass = document.querySelector(
    ".edit .one form #userpassword"
  ).value;

  if (username == userid && password == userpass) {
    window.open("/big/index.html");
  } else {
    alert("username or password is incorrect ❌");
  }
});
