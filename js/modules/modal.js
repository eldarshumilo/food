function openModalWin(modalSelector, modalTimerId) {
    const modalWin = document.querySelector(modalSelector);  

    modalWin.classList.add('show');
    modalWin.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
    
}
function closeModalWin(modalSelector) {
    const modalWin = document.querySelector(modalSelector);  

    modalWin.classList.add('hide');
    modalWin.classList.remove('show');
    document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector, modalTimerId){
      //Modal
    const btnModal = document.querySelectorAll(triggerSelector),
    modalWin = document.querySelector(modalSelector);      

    btnModal.forEach(btn =>{
        btn.addEventListener('click', () => openModalWin(modalSelector, modalTimerId));  
    });

    modalWin.addEventListener('click', (e)=> {
        if (e.target === modalWin || e.target.getAttribute('data-close')){
            closeModalWin(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWin.classList.contains('show')){
            closeModalWin(modalSelector);
        }
    });


    function showModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModalWin(openModalWin, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}
export default modal;
export {closeModalWin};
export {openModalWin};