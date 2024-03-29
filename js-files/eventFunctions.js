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

    let buttons = this.document.querySelectorAll('.button-container .button');

    buttons[0].onclick = () => {
        arrows.forEach((arrow) => {
            if (arrow.children[1].classList.contains('turn-vertical')) {
                arrow.children[1].classList.remove('turn-vertical');

                tableContainers.forEach((tableContainer) => {
                tableContainer.classList.add('expand-table');
            });
            }
        });
    }
    buttons[1].onclick = () => {
        arrows.forEach((arrow) => {
            if (!(arrow.children[1].classList.contains('turn-vertical'))) {
                arrow.children[1].classList.add('turn-vertical');

                tableContainers.forEach((tableContainer) => {
                tableContainer.classList.remove('expand-table');
            });
            }
        });
    }
});

function findIndex(arrowId) {
    let index = arrowId
    .split('')
    .filter((char) => parseFloat(char));

    return index.join('');
}