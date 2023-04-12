 const mario = document.querySelector('.mario');
 const pipe = document.querySelector('.pipe');

 const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },800);
 }

 const loop = setInterval(() => {

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)
    
    if(pipePosition <= 150 &&pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src = './Images/Mario_Death.png'
        mario.style.width = '120px'
        mario.style.marginLeft = '40px'

        clearInterval(loop);
    }
 },10)
 
 document.addEventListener('keydown', jump);  