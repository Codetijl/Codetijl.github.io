function green(){
  document.querySelector('.light3').style.background = "#2ecc71";
  document.querySelector('.light2').style.background = "gray";
  document.querySelector('.light2').style.animation = "";
  document.querySelector('.light1').style.background = "gray";
  document.querySelector('.btn1').style.display = "none"
  document.querySelector('.btn3').style.display = "none"
  document.querySelector('.btn2').style.display = "block"
}
function orange(){
  document.querySelector('.light3').style.background = "gray";
  document.querySelector('.light2').style.background = "#e67e22";
  document.querySelector('.light2').style.animation = "";
  document.querySelector('.light1').style.background = "gray";
  document.querySelector('.btn1').style.display = "none"
  document.querySelector('.btn2').style.display = "none"
  document.querySelector('.btn3').style.display = "block"
}
function red(){
  document.querySelector('.light3').style.background = "gray";
  document.querySelector('.light2').style.background = "gray";
  document.querySelector('.light2').style.animation = "";
  document.querySelector('.light1').style.background = "#e74c3c";
  document.querySelector('.btn2').style.display = "none"
  document.querySelector('.btn3').style.display = "none"
  document.querySelector('.btn1').style.display = "block"
}
function orange2(){
  document.querySelector('.light3').style.background = "gray";
  document.querySelector('.light2').style.background = "#e67e22";
  document.querySelector('.light1').style.background = "gray";
  document.querySelector('.light2').style.animation = "knip 1.5s infinite";
}
