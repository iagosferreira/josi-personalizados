var menuIcon = document.querySelector('.menu-icon');
var ulClicks = document.querySelectorAll('.ulclick1, .ulclick2, .ulclick3, .ulclick4');
ulClicks.forEach(link => {
    link.addEventListener('click', () => {
        if (ul.classList.contains('ativo')) {
            ul.classList.remove('ativo');
            document.querySelector('.menu-icon img').src = 'assets/imgs/menu.png';
        }
    });
});
var ul = document.querySelector('.nav-links');

menuIcon.addEventListener('click', ()=>{
    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'assets/imgs/menu.png'
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'assets/imgs/close.png'
    }
});

ulClick.addEventListener('click', ()=>{
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'assets/imgs/menu.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'assets/imgs/menu.png'
    }
})