
document.querySelector("input").addEventListener("keyup" , type);

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
  li.innerText = inp;
  ul.appendChild(li);
  ul.style.position = "relative";
  ul.style.left = "31%";
  ul.style.marginTop = "24px";
  updateComplete()
}

function updateComplete() {
  let ul = document.querySelector("ul");
  ul.childElementCount
}