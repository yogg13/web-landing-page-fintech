let positionY = 0;
let distance = 10;

function scrolling(id) {
    let scrollTarget = document.getElementById(id).offsetTop;

    let scrollAnimated = setTimeout(function() {
        scrolling(id);
    }, 5)

    positionY += distance;

    if(positionY >= scrollTarget){
        clearTimeout(scrollAnimated);
        positionY = 0;
    }else {
        window.scroll(0, positionY)
    }
    return false;
}