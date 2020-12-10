'use strict'

//window.addEventListener("load",init);
//function init(){

  const $edu = document.getElementById('edu');
  const $btn = document.getElementsByClassName("btn")[0]; 

  $btn.addEventListener("click", function () {
    console.log('버튼 클릭됨!!');
    $edu.style.backgroundColor = "green"
    $edu.style.color = "white"
    $edu.style.fontSize = "2em"
});

console.log(scsc)
