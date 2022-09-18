// add element

let btn=document.querySelector("#btn")
btn.addEventListener("click",addtext)
function addtext() {
  
let add = document.querySelector("#addtxt").value;
  let element = document.createElement("li");

  element.classList.add("newli");

  let h1 = document.createElement("h1");

  h1.textContent = add;
  h1.classList.add("h1tag");
  h1.style.color="red"

  let newbutton = document.createElement("button");

  newbutton.textContent = "Delete";
  newbutton.classList.add("newbutton");

  document.querySelector(" .ul").appendChild(element);
  element.appendChild(h1);
  element.appendChild(newbutton);


  
  document.querySelector("#addtxt").value=""
}

// delete element
let elbox = document.querySelector(".elementbox");

elbox.addEventListener("click", remove);

function remove(e) {
  if (e.target.className == "newbutton") {

    e.target.parentElement.remove()
  }
}

// hide element
let hidebtn = document.querySelector("#hideel");

hidebtn.addEventListener("change", function () {
  if (hidebtn.checked) {
    let hide = document.querySelectorAll(".newli");

    hide.forEach(function (e) {
      e.style.display = "none";
    });
  } else {
    let unhide = document.querySelectorAll(".newli");

    unhide.forEach(function (e) {
      e.style.display = "block";
    });
  }
});

// search element

let src = document.querySelector("#search");

src.addEventListener("keyup", search);

function search() {
  let srctext = src.value;
  

  let searchli = document.querySelectorAll(".newli");

  searchli.forEach(function (el) {
    let searchitem = el.firstChild.textContent;

    if (searchitem.indexOf(srctext) != -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

