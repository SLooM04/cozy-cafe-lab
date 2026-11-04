console.log('Cozy Cafe JavaScript is connected!');
 

const mainTitleEl = document.querySelector('#main-title');
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'


const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach((highlightTitleEl) => {
    console.log(highlightTitleEl.textContent);
    highlightTitleEl.style.fontStyle = 'italic';
});


const qute=document.querySelector('#quote-of-the-day');
qute.textContent = 'A little coffee, a little conversation'
qute.classList.add('featured');


const mainPhoto=document.querySelector('#main-photo');
console.log(mainPhoto.getAttribute('src'));
mainPhoto.setAttribute('src', './assets/berry-cake.jpg');
mainPhoto.setAttribute('alt', 'A berry cake served at the caٍfe');



    const bgColorBtnel = document.querySelector('#bg-color-btn');
    const bodyel = document.querySelector('body');
function handleBackgroundChange() {

    bodyel.style.backgroundColor ='lightsteelblue';
}
bgColorBtnel.addEventListener('click', handleBackgroundChange);

