
document.querySelector("input").addEventListener("keyup" , type);
let count = 0;

function type() {
  let inp = document.querySelector("input").value;
  let btn = document.querySelector("button");
    if(inp.length > 0)
      btn.style.display = "inline-block";
    else
      btn.style.display = "none";
}

function addItem() {
  let inp = document.querySelector("input").value;
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.setAttribute("onclick", "checkli(this)");
  li.innerHTML = "<input type=checkbox class='box'>" + inp;
  if (inp.length > 0) {

  ul.appendChild(li);
  resetInput();
  updateComplete(0);
  document.querySelector("input").focus();
}
}

function updateComplete(value) {
  count+=value;
  let comp = document.querySelector(".items");
  comp.innerText = "Completed: "+ count+" items";
}

function resetInput() {
  document.querySelector("input").value = "";
  document.querySelector("button").style.display = "none"
}

function checkli(obj) {
  obj.style.textDecoration = "line-through";
  obj.firstChild.checked = "checked";
  obj.firstChild.disabled = true;
  obj.removeAttribute('onclick');
  obj.setAttribute('class', 'marked');
  updateComplete(1);
}

function enter(e) {
  if(e.keyCode == 13)
    addItem()
}