let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (myName) {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

    else {
        alert('Enter you fucking name!');
        setUserName();
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } 
  else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }