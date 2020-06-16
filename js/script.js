// let btn = document.querySelector('.landing_ii__list-item');
//
// btn.onclick = function () {
//     btn.classList.add('is-active')
// };

let btn = document.querySelectorAll('.landing_ii__list-li');
btn.forEach((el) => {

    el.addEventListener('click', (e) => {
        console.log(el)
    })


})


