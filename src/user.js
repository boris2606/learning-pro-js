
// Поява блоків
let listBlock = document.querySelectorAll('.fadeBlock')
function showWithDelay(listBlock) {
    for (let i = 0; i < listBlock.length; i++) {
        setTimeout(() => { listBlock[i].classList.add('fadeIn')}, 1 * i);
    }
}
showWithDelay(listBlock);
// Завершення коду появи блоків

