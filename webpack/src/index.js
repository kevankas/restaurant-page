import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }



 function makeElements()
 {
  const fillPage = document.getElementById("content");
  
  fillPage.innerHTML = ("testt");
 }
 

 document.body.appendChild(component());
 document.body.appendChild(makeElements());