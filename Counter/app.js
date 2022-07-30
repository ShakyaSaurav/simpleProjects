//setting initial value yesko
let count = 0;
const value = document.querySelector('#value');
const btns= document.querySelectorAll('.btn');
//console.log(buttons);
btns.forEach(function(item){
//console.log('item');
 item.addEventListener('click',function (e) {
   //console.log(e.currentTarget.classList);
  const changes= e.currentTarget.classList;
  if (changes.contains('decrease')){
    count--;
  }
  else if(changes.contains('reset')){
    count=0;
  }
  else if(changes.contains('increase')){
    count++;
  }
  if(count<0){
    value.style.color="red";
  }
    if(count===0){
    value.style.color="#222";
  }
    if(count>0){
    value.style.color="green";
  }

  value.textContent = count;
 });
});