// 'use strict'
// function changeColor(){
//   const red = Math.foolr(Math.random()*(255+1)); 
//   const green = Math.foolr(Math.random()*(255+1)); 
//   const blue = Math.foolr(Math.random()*(255+1)); 




//   return "rgb("+red+","+green+","+blue+")";
// }


// for(let i=0; i<16; i++){
//   let bgColor = changeColor();
//   document.write('<div style = "background-color:''"></div>')
// }



'use strict';

function changeColor(){
  const red = Math.floor(Math.random()*(255+1));
  const green = Math.floor(Math.random()*(255+1));
  const blue = Math.floor(Math.random()*(255+1));

  return"rgb("+red+","+green+","+blue+")";
}

for(let i=0; i<16; i++){
  let bgColor = changeColor();
  document.write('<div style="background-color:'+changeColor()+'">'+ bgColor+'</div>');
}