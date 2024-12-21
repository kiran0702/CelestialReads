var addpopup=document.getElementById("addpopup")
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")

addpopup.addEventListener("click",function(){
  overlay.style.display="block"
  popupbox.style.display="block"
})

var cancel=document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
  event.preventDefault()
  overlay.style.display="none"
  popupbox.style.display="none"
})

var container=document.querySelector(".container")
var add=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescription=document.getElementById("book-description-input")

add.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${booktitle.value}</h2>
  <h5>${bookauthor.value}</h5>
  <p>${bookdescription.value}</p>
<button id="del" onclick="deletebook(event)">Delete</button>`
  container.append(div)
  overlay.style.display="none"
  popupbox.style.display="none"

})


function deletebook(event){
  event.target.parentElement.remove()
}