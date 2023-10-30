let students = [
    { name: "Neha Kumari", reg: "12208483" },
    { name: "Riya Gupta", reg: "12205884" },
    { name: "Simran Kumari", reg: "12212978" },
    { name: "Simran Singh", reg: "12219537" },
    { name: "Sukhdeep Kaur", reg: "12209123" },
    { name: "Supriya Kumari", reg: "12210885" },
    { name: "Tanisha Grover", reg: "12209024" },
    { name: "Vikram Soni", reg: "12208804" },
    { name: "Vimlesh Kumar Gupta", reg: "12204918" },
    { name: "Vipul Maheshwari", reg: "12220092" },
    { name: "Vivek Singh", reg: "12203082" },
    { name: "Yashraj Ayaskanta Garnayak", reg: "12208541" },
    { name: "Abhinav Jindal", reg: "12219284" },
    { name: "Abhishek Kumar Pal", reg: "12208533" },
    { name: "Alind Yadav", reg: "12207456" },
    { name: "Aman Raj", reg: "12205060" },
  ];
  
  const users = document.querySelector(".main-container .search .users");
  
  students.forEach((obj, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "first");
  
    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
    );
  
    const innerDiv = document.createElement("div");
  
    const h3 = document.createElement("h3");
    h3.innerText = `${obj.name} : ${obj.reg}`;
  
    const para = document.createElement("p");
    para.innerText = "Ma'am, you haven't sent the ppt once again";
  
    innerDiv.appendChild(h3);
    innerDiv.appendChild(para);
  
    div.appendChild(image);
    div.appendChild(innerDiv);
  
    users.appendChild(div);
  });
  
  function findUser(inputText) {
    const test = students.filter((obj, index) => {
      return (
        obj.reg === inputText ||
        obj.name.toLowerCase() === inputText.toLowerCase()
      );
    });
  
    const obj = test[0];
  
    users.innerHTML = "";
  
    const div = document.createElement("div");
    div.setAttribute("class", "first");
  
    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
    );
  
    const innerDiv = document.createElement("div");
  
    const h3 = document.createElement("h3");
    h3.innerText = `${obj.name} : ${obj.reg}`;
  
    const para = document.createElement("p");
    para.innerText = "Ma'am, you haven't sent the ppt once again";
  
    innerDiv.appendChild(h3);
    innerDiv.appendChild(para);
  
    div.appendChild(image);
    div.appendChild(innerDiv);
  
    users.appendChild(div);
  }
  
  const searchButton = document.querySelector(
    ".main-container .sidebar .search .fa-plus"
  );
  const inputTextt = document.querySelector(
    ".main-container .sidebar .search input"
  );
  
  searchButton.addEventListener("click", () => {
    const inputText = inputTextt.value;
    findUser(inputText);
  });
  
  inputTextt.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const inputText = inputTextt.value;
      findUser(inputText);
    }
  });
  