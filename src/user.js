
// Поява блоків
let listBlock = document.querySelectorAll('.fadeBlock')
function showWithDelay(listBlock) {
    for (let i = 0; i < listBlock.length; i++) {
        setTimeout(() => { listBlock[i].classList.add('fadeIn')}, 1 * i);
    }
}
showWithDelay(listBlock);
// Завершення коду появи блоків


let person = {
    name: 'Boris',
    age: 30,
    country: 'Ukrain',
    city: 'Lviv'
}

let {name, age, ...adress} = person

console.log(name,age,adress);
