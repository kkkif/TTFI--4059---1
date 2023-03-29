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

    burger.addEventListener("click", function(){
        burger.classList.toggle("active")
        nav.classList.toggle("open")
        body.classList.toggle("hidden")
    })
 }