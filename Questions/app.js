const question = document.querySelectorAll('.question');
question.forEach(function(question){
    //console.log('question');
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
   btn.addEventListener('click',function(){
    question.classList.toggle('show-text');
   });
    
});