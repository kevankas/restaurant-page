import _ from 'lodash';

 function makeElements()
 {
  const fillPage = document.getElementById("content");
  const container = document.createElement("div");
  fillPage.appendChild(container);
  container.classList.add("container");
  const bodyText = document.createElement("div");
  const sectionOne = document.createElement("div");
  const sectionTwo = document.createElement("div");
  const sectionThree = document.createElement("div");
  const img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"


  fillPage.appendChild(bodyText);
  bodyText.classList.add("body");
  // bodyText.appendChild(img);
  bodyText.appendChild(sectionOne);
  sectionOne.classList.add("sectionOne");
  bodyText.appendChild(sectionTwo);
  sectionTwo.classList.add("sectionTwo");
  bodyText.appendChild(sectionThree);
  sectionThree.classList.add("sectionThree");
  sectionOne.appendChild(img);
  sectionTwo.textContent = "The Black Forge Inn Home Page!";
  sectionThree.textContent = "Come Eat At The Black Forge Inn Today!"
 
  for (let i = 1; i <= 3; i++) {
    const newDiv = document.createElement("div");

    if (i == 1)
      {
        newDiv.classList.add("selected");
        newDiv.textContent = "Home";
        newDiv.addEventListener("click", () => {
          clearSelected();
          newDiv.classList.add("selected");
          
          // alert("You clicked on Home!");
          fillPage.appendChild(bodyText);
          bodyText.classList.add("body");
          // bodyText.appendChild(img);
          bodyText.appendChild(sectionOne);
          sectionOne.classList.add("sectionOne");
          bodyText.appendChild(sectionTwo);
          sectionTwo.classList.add("sectionTwo");
          bodyText.appendChild(sectionThree);
          sectionThree.classList.add("sectionThree");
          sectionOne.appendChild(img);
          sectionTwo.textContent = "The Black Forge Inn Home Page!";
          sectionThree.textContent = "Come Eat At The Black Forge Inn Today!"

        });
      }
    if (i == 2)
      {
        newDiv.textContent = "Menu";
        newDiv.addEventListener("click", () => {
          clearSelected();
          newDiv.classList.remove("selected");
          newDiv.classList.add("selected");
          // alert("You clicked on Menu!");
          fillPage.appendChild(bodyText);
          bodyText.classList.add("body");
          // bodyText.appendChild(img);
          bodyText.appendChild(sectionOne);
          sectionOne.classList.add("sectionOne");
          bodyText.appendChild(sectionTwo);
          sectionTwo.classList.add("sectionTwo");
          bodyText.appendChild(sectionThree);
          sectionThree.classList.add("sectionThree");
          sectionOne.appendChild(img);
          sectionTwo.textContent = "The Black Forge Inn Menu Page";
          sectionThree.textContent = "Come Eat At The Black Forge Inn Today!"
        });
      }
    if (i == 3)
      {
        newDiv.textContent = "Contact";
        newDiv.addEventListener("click", () => {
          clearSelected();
          newDiv.classList.add("selected");
          // alert("You clicked on Contact!");
          fillPage.appendChild(bodyText);
          bodyText.classList.add("body");
          // bodyText.appendChild(img);
          bodyText.appendChild(sectionOne);
          sectionOne.classList.add("sectionOne");
          bodyText.appendChild(sectionTwo);
          sectionTwo.classList.add("sectionTwo");
          bodyText.appendChild(sectionThree);
          sectionThree.classList.add("sectionThree");
          sectionOne.appendChild(img);
          sectionTwo.textContent = "The Black Forge Inn Contact Page";
          sectionThree.textContent = "Come Eat At The Black Forge Inn Today!"
        });
      }
    newDiv.classList.add("hdr");
    container.appendChild(newDiv);
  }

 }
 
 document.body.appendChild(makeElements());


 function clearSelected() {
  const buttons = document.querySelectorAll(".selected");
  buttons.forEach(button => {
    button.classList.remove("selected");
  });
}