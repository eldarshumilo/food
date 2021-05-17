function slider(){
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res=> console.log(res));

    const countnext = document.querySelector('.offer__slider-next');
    const countprev = document.querySelector('.offer__slider-prev');
    const slides = document.querySelectorAll('.offer__slide');
    const slide = Array.from(slides);
    const current = document.querySelector('#current');
    const slider = document.querySelector('.offer__slider');

   
    function hideSlideContent() {
        slide.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show' ,'fade');
        });
    }

    function showSlideContent(i = 0) {
        slide[i].classList.remove('hide');
        slide[i].classList.add('show', 'fade');
        
    }
    hideSlideContent();
    showSlideContent();

    function slidesmove(){
        slide.forEach(() => {
            hideSlideContent();
            showSlideContent(i);  
        });
        current.innerHTML = `0${i+1}`;
    }

    slider.style.position = 'relative';
    
    const indicators = document.createElement('ol'),
          dots=[];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText=`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    
    slider.append(indicators);

    for(let i=0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if(i==0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);

        
    }

    function opac(){
        dots.forEach(dot => dot.style.opacity='.5');
        dots[i].style.opacity = 1;
    }
    let i = 0;
    countnext.addEventListener('click', () => {
        if(i<3){
            i++;
            slidesmove();
        } else {
            i=0;
            slidesmove();
        }
        opac();
    });
    countprev.addEventListener('click', () => {
        if(i>0){
            i--;
            slidesmove();
        } else {
            i=3;
            slidesmove();
        }
        opac();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            i = slideTo-1;
            console.log(i);
            slidesmove();
            opac();
        });
    });
}
module.exports = slider;