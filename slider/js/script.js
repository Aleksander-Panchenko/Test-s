const next = document.querySelector(".btn-n");
const back = document.querySelector(".btn-b");
const swiper = document.querySelector(".swiper")
const moveLine = document.querySelector(".move")
const number = document.querySelector(".slider-pagination2")
const buttons = document.querySelectorAll(".slider-pagination3-node")

next.addEventListener("click" , sliderNext )

let i = 0;
const buttonsArr = Array.from(buttons);

function sliderNext () {
    if( i < 4){
        i++;
        swiper.style = `margin-left: -${100*i}%`;
        moveLine.style = `left: ${20*i}%`;
        number.textContent = `${i+1} / 5`;
        buttons.forEach(function(item) {
            item.classList.remove("active")
            item.classList.add("no-active")
        });
        buttons[i].classList.remove("no-active")
        buttons[i].classList.add("active")
    } 
}

back.addEventListener("click" , sliderBack )

function sliderBack () {
    if (i > 0) {
        i--;
        swiper.style = `margin-left: -${100*i}%`;
        moveLine.style = `left: ${20*i}%`;
        number.textContent = `${i+1} / 5`;
        buttons.forEach(function(item) {
            item.classList.remove("active")
            item.classList.add("no-active")
        });
        buttons[i].classList.remove("no-active")
        buttons[i].classList.add("active")
    }
}

buttons.forEach( n => {
    n.addEventListener("click" , nodeList)
})



function nodeList (evt) {
    const target = evt.currentTarget;
    buttons.forEach(function(item) {
        item.classList.remove("active")
        item.classList.add("no-active")
    });
    target.classList.remove("no-active")
    target.classList.add("active");
    i = buttonsArr.indexOf(target);
    swiper.style = `margin-left: -${100*i}%`;
    moveLine.style = `left: ${20*i}%`;
    number.textContent = `${i+1} / 5`;
}