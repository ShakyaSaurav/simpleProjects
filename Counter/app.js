//setting initial value yesko
let count = 0;
const value = document.querySelectorAll('#value');
const buttons= document.querySelectorAll('.btn');
//console.log(buttons);
buttons.forEach(function(item){
//console.log('item');
 item.addEventListener('click',function(e){
    const changes=e.currentTarget.classList;
    if(changes.contains('decrease')){
        count--;
    }
 })
});