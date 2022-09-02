function randomColors() {
    let red = parseInt((Math.random()) * 255);
    let green = parseInt((Math.random()) * 255);
    let blue = parseInt((Math.random()) * 255);
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}

let randomColor = document.getElementsByClassName("color");
for (let index = 1; index < randomColor.length; index += 1) {
    randomColor[index].style.backgroundColor = randomColors();
}