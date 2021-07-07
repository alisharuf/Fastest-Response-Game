function getRandomColor(){/*This function will help us to grab random color by taking the mixture of number and alphabet randomly*/
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i =0; i<6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 function makeShapeAppear(){/*after refreshing the page,this function will help in appear the shape*/
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  var width = (Math.random()*200) + 100;
   if(Math.random() > 0.5){/*this code will help us to change shape of square to circle after half the time*/
    document.getElementById("shape").style.borderRadius = "50%";
   }
    else{
    document.getElementById("shape").style.borderRadius = "0";
  }
  document.getElementById("shape").style.backgroundColor = getRandomColor();/*it gives random color to the shape by calling the function*/
  document.getElementById("shape").style.height=width + "px";/*it will give a random position to the shape at any place of the shape*/
  document.getElementById("shape").style.width = width +"px";/*it will give a random position to the shape at any place of the shape*/
  document.getElementById("shape").style.top  = top + "px";/*it will give a random position to the shape at any place of the shape*/
  document.getElementById("shape").style.left  = left + "px";/*it will give a random position to the shape at any place of the shape*/
  document.getElementById("shape").style.display = "block";/*block is used to appear the shape again*/
 start =new Date().getTime();/*we use it here again to reset the time of shape after refreshing the page*/

}
function appearAfterDelay(){
 setTimeout(makeShapeAppear,Math.random()*2000);/*The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.*/

}
appearAfterDelay();/*this function call will make the shape appear again */
document.getElementById("shape").onclick = function(){
   document.getElementById("shape").style.display = "none";/*used to make the shape disappear*/
   var end = new Date().getTime();
   var timeTaken = (end - start)/1000;/*total time taken by the shape to disappear*/
   document.getElementById("totalTime").innerHTML = timeTaken + "s";
   appearAfterDelay();/*this function call will make the shape appear again */


}
