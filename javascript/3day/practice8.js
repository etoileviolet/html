'use strict';

function changeColor(){
  const red = Math.floor(Math.random()*(255+1));
  const green = Math.floor(Math.random()*(255+1));
  const brue = Math.floor(Math.random()*(255+1));

    return "rgb("+red+","+green+","+brue+")";
  //return `rgb(${red},rgb(${green},rgb(${blue})`; // 문자열 템플릿 ? 이거 하면 안됌
}

for(let i=0; i<16; i++){
  let bgColor = changeColor();
  document.write('<div style="background-color:'+bgColor+'">'+bgColor+'</div>');
}