const swipe = new Swiper('.swiper', { 

    spaceBetween: 16,   
    
    breakpoints: {        
        320: {
          slidesPerView: 1.3,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },     
        350: {
          slidesPerView: 1.4,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },      
        380: {
          slidesPerView: 1.5,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },   
        410: {
          slidesPerView: 1.6,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },   
        440: {
          slidesPerView: 1.7,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },  
        470: {
          slidesPerView: 1.8,  
          enabled: true,   
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,     
        },  
        500: {
          slidesPerView: 1.9,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        530: {
          slidesPerView: 2.1,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        560: {
          slidesPerView: 2.2,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        590: {
          slidesPerView: 2.3,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        620: {
          slidesPerView: 2.4,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        650: {
          slidesPerView: 2.5,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        680: {
          slidesPerView: 2.6,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        710: {
          slidesPerView: 2.7,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },
        740: {
          slidesPerView: 2.8,
          slidesOffsetAfter: 16,
          slidesOffsetBefore: 16,  
          enabled: true,  
        },        
        768: {
          enabled: false,   
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,       
        }
    },
    spaceBetween: 16,
    grabCursor: true,
    updateOnWindowResize: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
},)

const button = document.querySelector('.swiper__footer-button');
const buttonCollection = document.querySelectorAll('.visually-hidden');
const buttonSpan = button.querySelector('.footer-text')


button.addEventListener ('click', function () {
  for (let i = 0; i < buttonCollection.length; i++) {  
    buttonCollection[i].classList.toggle('add'); 
  } 
  buttonCheck ();

})

function buttonCheck () {
  if (buttonSpan.textContent === 'Показать все') {
    buttonSpan.textContent = ('Скрыть');
    buttonSpan.classList.remove('footer-text');
    buttonSpan.classList.add('footer-text-add');

  } else if (buttonSpan.textContent == 'Скрыть') {
    buttonSpan.textContent = ('Показать все')
    buttonSpan.classList.remove('footer-text-add');
    buttonSpan.classList.add('footer-text'); 
  }
}
