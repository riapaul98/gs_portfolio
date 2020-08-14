var incButton=document.querySelector('.increment');
var decButton=document.querySelector('.decrement');
var counter=document.querySelector('.counter_values');

function increment(){
   var num=Number(counter.textContent);
   num+=1;
   counter.textContent=num;
}
function decrement(){
    var num=Number(counter.textContent);
    num-=1;
    counter.textContent=num;
}
incButton.addEventListener('click',increment);
decButton.addEventListener('click',decrement);