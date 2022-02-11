const checkedBox = document.querySelector('.checked')
const divBox = document.querySelector('.checkBox')

export default checkedBox.addEventListener('click', function(){
    divBox.classList.toggle('active')
})