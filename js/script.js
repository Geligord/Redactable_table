let change = document.getElementsByClassName('change')
function changeFunc(e) {
    e.target.previousElementSibling.disabled = false;
    e.target.previousElementSibling.previousElementSibling.disabled = false;
}
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener('click', changeFunc, false); 
}