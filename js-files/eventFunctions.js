window.addEventListener('load', function() {

    let arrows = this.document.querySelectorAll('.arrow');

    arrows.forEach((arrow) => {
        arrow.onclick = () => {
            arrow.children[1].classList.toggle('turn-vertical');
        }
    });
});
