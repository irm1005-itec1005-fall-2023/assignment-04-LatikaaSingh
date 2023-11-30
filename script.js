/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */
const inputbox = document.getElementById("input-box");// declaring constant
const listcontainer = document.getElementById("list-container");// declaring constant

function addToDoItem() 
{
  if (inputbox.value === '') //this condition checks if the users has not given any input and will declare an alert message
  {
    alert("the input is invalid");
  }
  else
  {
    let li = document.createElement("li");//html element with the tag name 'li' is created
    li.innerHTML = inputbox.value;//the input entered will be stored in li
    listcontainer.appendChild(li);//the input stored in li is appended to the listcontainer
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputbox.value = "";//this clears the input box so that we can enter the next task
  SaveList();//function call
}

listcontainer.addEventListener
(
  "click", function(TheElement)
  {
    if (TheElement.target.tagName === "LI")
    {
      TheElement.target.classList.toggle("checked");//toggles the status of the element
      SaveList();//function call
    }
    else if (TheElement.target.tagName === "SPAN")
    {
      TheElement.target.parentElement.remove();//removes element
      SaveList();//function call
    }
  }, false
)

function SaveList()//this function saves the inputs and if they are marked as completed or not even when the page is refreshed
{
  localStorage.setItem("data", listcontainer.innerHTML);
}

function ShowList()//this function prints the updated and saved data
{
  listcontainer.innerHTML = localStorage.getItem("data");
}

ShowList();//function call