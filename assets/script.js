const ps5s = document.querySelectorAll('.controller__ps5')
const xboxs = document.querySelectorAll('.controller__xbox')
const fadedElements = document.querySelectorAll('.faded')

window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    ps5s.forEach(ps5 => {
        ps5.style.transform = `rotate(${pos/20}deg)`;
    });
    xboxs.forEach(xbox => {
        xbox.style.transform = `rotate(-${pos/20}deg)`;
    });
    
    for (let i = 0; i < fadedElements.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = fadedElements[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            fadedElements[i].classList.add('active')
        }
        else {
            fadedElements[i].classList.remove('active')
        }
    }
       
    
})