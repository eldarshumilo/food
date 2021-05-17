function forms(){
        //forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindpostData(item);
    });
    
    const postData = async (url, data)=> {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json(); 
    };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =`
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
        

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch(()=>{
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }


    function showThanksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModalWin();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class ='modal__content'>
                <div class ='modal__close' data-close>&times;</div>
                <div class='modal__title'>${message.success}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModalWin();
        }, 4000);
    }

}
module.exports = forms;