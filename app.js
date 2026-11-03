console.log('Cozy Cafe JavaScript is connected!');
 

const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'Welcome to the Cozy Cafe'


const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach((highlightTitleEl) => {
    console.log(highlightTitleEl);
    highlightTitleEl.style.fontStyle = 'italic';
});


const qute=document.querySelector('#quote-of-the-day');
qute.textContent = 'A little coffee, a little conversation'
qute.classList.add('featured');


const mainPhoto=document.querySelector('#main-photo');
mainPhoto.setAttribute('src', './assets/berry-cake.jpg');
mainPhoto.setAttribute('alt', 'A berry cake served at the cafe');



    const bgColorBtnel = document.querySelector('#bg-color-btn');
    const bodyel = document.querySelector('body');
function handleBackgroundChange() {

    bodyel.style.backgroundColor ='lightsteelblue';
}
bgColorBtnel.addEventListener('click', handleBackgroundChange);

