import _ from 'lodash';

 function makeElements()
 {
  const fillPage = document.getElementById("content");


 
  for (let i = 1; i <= 3; i++) {
    const newDiv = document.createElement("div");

    if (i == 1)
      {
        newDiv.textContent = "Home";
      }
    if (i == 2)
      {
        newDiv.textContent = "Menu";
      }
    else
      {
        newDiv.textContent = "Contact";
      }
    newDiv.classList.add("hdr");
    fillPage.appendChild(newDiv);
  }



 }
 
 document.body.appendChild(makeElements());


 