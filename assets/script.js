const ps5s = document.querySelectorAll('.controller__ps5')
const xboxs = document.querySelectorAll('.controller__xbox')
const disItems = document.querySelectorAll('.discover__item')
// const js1000 = document.getElementById('js1000')
// const js1650 = document.getElementById('js1650')
// const js2700s = document.querySelectorAll('.js2700')
// const js3110s = document.querySelectorAll('.js3110')
// const js3960s = document.querySelectorAll('.js3960')
// const js4200s = document.querySelectorAll('.js4200')
// const js5530s = document.querySelectorAll('.js5530')
// const js7100 = document.querySelector('.js7100')
// const js7250 = document.querySelector('.js7250')
// const js7450 = document.querySelector('.js7450')

window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    ps5s.forEach(ps5 => {
        ps5.style.transform = `rotate(${pos/20}deg)`;
    });
    xboxs.forEach(xbox => {
        xbox.style.transform = `rotate(-${pos/20}deg)`;
    });
    // console.log(pos)

})
    // if (window.outerHeight>=1039) {

    //     if (pos>200) {
    //         disItems.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>999) {
    //         js1000.classList.add('active')
    //     }
    
    //     if (pos>1799) {
    //         js1650.classList.add('active')
    //     }
    
    //     if (pos>2699) {
    //         js2700s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>3110) {
    //         js3110s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>4400) {
    //         js3960s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>4600) {
    //         js4200s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>5830) {
    //         js5530s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>7600) {
    //         js7100.classList.add('active')
    //     }
        
    //     if (pos>7750) {
    //         js7250.classList.add('active')
    //     }
        
    //     if (pos>7900) {
    //         js7450.classList.add('active')
    //     }
    // }

    // else if (760<=window.outerHeight) {

    //     if (pos>138) {
    //         disItems.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>1111) {
    //         js1000.classList.add('active')
    //     }
    
    //     if (pos>1435) {
    //         js1650.classList.add('active')
    //     }
    
    //     if (pos>2361) {
    //         js2700s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>2613) {
    //         js3110s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>3517) {
    //         js3960s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>3817) {
    //         js4200s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>5150) {
    //         js5530s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>6666) {
    //         js7100.classList.add('active')
    //     }
        
    //     if (pos>6868) {
    //         js7250.classList.add('active')
    //     }
        
    //     if (pos>7000) {
    //         js7450.classList.add('active')
    //     }
    // }

    // else {

    //     if (pos>300) {
    //         disItems.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>1040) {
    //         js1000.classList.add('active')
    //     }
    
    //     if (pos>1435) {
    //         js1650.classList.add('active')
    //     }
    
    //     if (pos>2310) {
    //         js2700s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>2613) {
    //         js3110s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>3499) {
    //         js3960s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>3799) {
    //         js4200s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>5150) {
    //         js5530s.forEach(item => {
    //             item.classList.add('active')
    //         })
    //     }
    
    //     if (pos>6666) {
    //         js7100.classList.add('active')
    //     }
        
    //     if (pos>6868) {
    //         js7250.classList.add('active')
    //     }
        
    //     if (pos>7000) {
    //         js7450.classList.add('active')
    //     }
    // }
    


