const btn = document.getElementsByClassName("btn");

const side = document.getElementsByClassName("sidebar");

const importantLink = document.getElementsByClassName("important-links");
const contentHeader = document.getElementsByClassName("content-header");
const btnnav = document.getElementsByClassName("btn");

btn[0].addEventListener("click", () => {
  side[0].classList.toggle("testt");
  importantLink[0].classList.toggle("important-links2");
  contentHeader[0].classList.toggle("content-header2");
  btnnav[0].classList.toggle("btn-nav2");
});

async function fetchData() {
  const message = await fetch("https://dummyjson.com/products");
  const usefulMessage = await message.json();

  console.log(usefulMessage.products);

  data = usefulMessage.products;

  data.forEach((element) => {
    const test = document.querySelector(".message-box .message-box-two");

    const test2 = document.createElement("p");
    const test4 = document.createElement("span");

    test2.classList.add("krishna");
    test4.classList.add("empty-box");

    const textnode = document.createTextNode(element.description);

    test2.appendChild(textnode);

    test.appendChild(test4);
    test.appendChild(test2);
  });
}

fetchData();

const sign = document.querySelector(".out #signoutbtn");

sign.addEventListener("click", function () {
  window.open("../index.html");
});

const select = document.querySelector(".list .krishna");

const newPage = document.querySelector("#show");

select.addEventListener("mouseover", function () {
  newPage.style.display = "block";
});

select.addEventListener("mouseout", function () {
  newPage.style.display = "none";
});

// for clicking whatsapp button
const whatsappButton = document.querySelector(
  ".important-links #whatsapp-button"
);

const whatsappDiv = document.querySelector(".important-links .whatsapp");

whatsappButton.addEventListener("click", function () {
  whatsappDiv.style.display = "block";
});

const whatsappCloseButton = document.querySelector(
  ".important-links .whatsapp .close .close-button"
);

whatsappCloseButton.addEventListener("click", function () {
  whatsappDiv.style.display = "none";
});

const closeButton2 = document.querySelector(
  ".important-links .whatsapp .close-button2"
);

closeButton2.addEventListener("click", function () {
  whatsappDiv.style.display = "none";
});

// rms javascript

// const agree = document.querySelector(
//   ".rms .rms-inteface .rms-interface-content .interface-para .agree"
// );

// agree.addEventListener("click", function () {
//   alert("Succesfully submitted");
// });
