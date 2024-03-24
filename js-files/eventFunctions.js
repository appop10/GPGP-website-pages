window.addEventListener('load', function() {
    let arrows = this.document.querySelectorAll('.arrow');
    let tableContainers = this.document.querySelectorAll('.table-container');

    arrows.forEach((arrow) => {
        arrow.onclick = () => {
            let arrowIndex = findIndex(arrow.id);
            let tableContainer = tableContainers[arrowIndex - 1];

            arrow.children[1].classList.toggle('turn-vertical');
            tableContainer.classList.toggle('expand-table');
        }
    });
});

function findIndex(arrowId) {
    let index = arrowId
    .split('')
    .filter((char) => parseFloat(char));

    return index.join('');
}