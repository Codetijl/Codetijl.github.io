sound = document.getElementById('mp3')
function no(){
  document.querySelector('.light2').style.animation = "";
  document.querySelector('.light3').style.animation = "knip 2.5s infinite";
  document.querySelector('.light1').style.animation = "";
  document.querySelector('.btn1').style.display = "none"
  document.querySelector('.btn2').style.display = "block"
  sound.pause();
  sound.currentTime = 0;
}
function train(){
  document.querySelector('.light1').style.animation = "rood2 1.5s infinite";
  document.querySelector('.light2').style.animation = "rood1 1.5s infinite";
  document.querySelector('.light3').style.animation = "";
  document.querySelector('.btn2').style.display = "none"
  document.querySelector('.btn1').style.display = "block"
  sound.play();
}
