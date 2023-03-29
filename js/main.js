window.onload = function () { 
    let headfx = document.querySelector (".header-fixed")
    window.addEventListener("scroll", function(){
        if((window.pageYOffset || document.documentElement.scrollTop) > 1){
            headfx.classList.add("active")
        } else{
            headfx.classList.remove("active")
        }
    })

    let burger = document.querySelector (".burger");
    let nav = document.querySelector(".nav");
    let body = document.querySelector("body");
    let btnUp = document.querySelector(".arrow-btn-up");

    burger.addEventListener("click", function(){
        burger.classList.toggle("active")
        nav.classList.toggle("open")
        body.classList.toggle("hidden")
        if (window.pageYOffset < 300) btnUp.classList.remove("btn-visible");
        else if (window.pageYOffset > 300 && body.classList.contains("hidden")) btnUp.classList.remove("btn-visible")
        else btnUp.classList.add("btn-visible");
    })

    const buttonUp = {
        el: document.querySelector('.arrow-btn-up'),
        show() {
          this.el.classList.add('btn-visible');
        },
        hide() {
          this.el.classList.remove('btn-visible');
        },
        addEventListener() {
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 300 ? this.show() : this.hide();
          });
          document.querySelector('.arrow-btn-up').onclick = () => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
    
      buttonUp.addEventListener();
 }