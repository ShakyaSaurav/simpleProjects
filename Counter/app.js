//setting initial value yesko
let count = 0;
const value = document.querySelectorAll('#value');
const btns= document.querySelectorAll('.btn');
//console.log(buttons);
btns.forEach(function(item){
//console.log('item');
 item.addEventListener('click',function (e) {
    const styles = e.currentTarget.classlist;
    //console.log(e);
    if (styles.contains('decrease')){
        count--;
    }
    else if (styles.contains('reset')){
        count=0;
    }
    else if (styles.contains('increase')){
        count++;
    }
value.textContent = count;
 });
});