function modal(){
      //Modal

    const btnModal = document.querySelectorAll('[data-modal]'),
    modalWin = document.querySelector('.modal');

    function openModalWin() {
        modalWin.classList.add('show');
        modalWin.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }      

    btnModal.forEach(btn =>{
        btn.addEventListener('click', openModalWin);  
    });

    function closeModalWin() {
        modalWin.classList.add('hide');
        modalWin.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalWin.addEventListener('click', (e)=> {
        if (e.target === modalWin || e.target.getAttribute('data-close')){
            closeModalWin();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWin.classList.contains('show')){
            closeModalWin();
        }
    });

    const modalTimerId = setTimeout(openModalWin, 50000);

    function showModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModalWin();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}
module.exports = modal;