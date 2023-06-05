var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hello.png') {
      myImage.setAttribute ('src','images/feuer.png');
    } else {
      myImage.setAttribute ('src','images/hello.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Guten Tag, Rammstein-Liebhaber. Wie heißt du?');
    localStorage.setItem('Dein Name', myName);
    myHeading.textContent = myName + ", das ist Rammstein.";
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ", das ist Rammstein.";
  }
  myButton.onclick = function() {
    setUserName();
  }
  