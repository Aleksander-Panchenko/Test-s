const choseColor = document.querySelectorAll(".chose-color__btn");
const contenItem = document.querySelectorAll(".content-item");

choseColor.forEach(function(element){
    element.addEventListener("click", open)
})

function open (evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    choseColor.forEach(function(item){
        item.classList.remove("chose-color__btn__active")
    });

    target.classList.add("chose-color__btn__active");

    contenItem.forEach(function(item){
        item.classList.remove("content-item__active")
    });

    contentActive.forEach(function(item){
        item.classList.add("content-item__active")
    })
}