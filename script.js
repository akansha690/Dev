let ball = document.querySelector('.ball');

document.addEventListener('keydown', (e)=>{
    if(e.key == 'u'){
        ball.classList.add('bounce');
    }
})
 
