document.addEventListener('DOMContentLoaded', function() {
    let one = "rgb(255, 0, 0)";
    let two = "rgb(0, 255, 0)";
    let three = "rgb(0, 0, 0)";

    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    changeColorBtn.addEventListener('click', function() {
        const colors = [one, two, three];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = randomColor;
        console.log('Button clicked, color changed to:', randomColor);
    });
});