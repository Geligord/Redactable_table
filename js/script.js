let add = document.getElementById('add')
let disabled = true  
let names = ['Вова', 'Саша', 'Петя', 'Леша', 'Маша']
let numbers = ['+7-(765)-233-49-65', '+7-(544)-235-12-32', '+7-(673)-906-65-28', '+7-(183)-410-71-10', '+7-(490)-092-45-54']
// В условиях тестового задания можно считать, что эти данные получены через api, пока что реализую это так.
// При изменении данных в таблице, списки также редактируются, так что данные не будут потеряны.
for (let i = 0; i < names.length || i < numbers.length; i++) {
    document.getElementById('personData').innerHTML += '<div class="person"><input disabled="true" type="text" class="name" placeholder=' + names[i] + '><input disabled="true" type="text" class="number" placeholder=' + numbers[i] + '><button class="change">Редактировать</button><button class="delete">Удалить</button></div>'
}
function addPerson() {
    if (document.getElementById('name').value === '') {
        document.getElementById('name').value = 'Введите имя'
    }
    if (isNaN(document.getElementById('name').value) === false) {
        document.getElementById('name').value = 'Без цифр'
    }
    else if (document.getElementById('number').value === '') {
        document.getElementById('number').value = 'Введите номер телефона'
    }
    else if (isNaN(document.getElementById('number').value) === true) {
        document.getElementById('number').value = 'Без букв'
    }
    else {
        document.getElementById('personData').innerHTML += '<div class="person"><input disabled="true" type="text" class="name" placeholder=' + document.getElementById('name').value + '><input disabled="true" type="text" class="number" placeholder=' + document.getElementById('number').value + '><button class="change">Редактировать</button><button class="delete">Удалить</button></div>'
        names.push(document.getElementById('name').value)
        numbers.push(document.getElementById('number').value)
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
        document.getElementsByClassName('change')[document.getElementsByClassName('change').length-1].addEventListener('click', changeFunc)
        document.getElementsByClassName('delete')[document.getElementsByClassName('delete').length-1].addEventListener('click', deleteFunc)
    }
}
add.addEventListener('click', addPerson)
function border() {
    e.target.previousElementSibling.previousElementSibling.style.border = ''
}
function changeFunc(e) {
    let index = numbers.indexOf(e.target.previousElementSibling.placeholder)
    if (disabled === false) {
        if (e.target.previousElementSibling.previousElementSibling.value === '') {
            e.target.previousElementSibling.previousElementSibling.value = 'Введите имя'
        }
        if (isNaN(e.target.previousElementSibling.previousElementSibling.value) === false) {
            e.target.previousElementSibling.previousElementSibling.value = 'Без цифр'
        }
        else if (e.target.previousElementSibling.value === '') {
            e.target.previousElementSibling.value = 'Введите номер телефона'
        }
        else if (isNaN(e.target.previousElementSibling.value) === true) {
            e.target.previousElementSibling.value = 'Без букв'
        }
        else {
            numbers[index] = e.target.previousElementSibling.value
            e.target.previousElementSibling.disabled = true;
            e.target.previousElementSibling.previousElementSibling.disabled = true;
            e.target.innerText = 'Редактировать'
            disabled = true
        }
    }
    else if (disabled === true) {
        e.target.previousElementSibling.disabled = false;
        e.target.previousElementSibling.previousElementSibling.disabled = false;
        e.target.innerText = 'Сохранить'
        disabled = false
    } 
}
function deleteFunc(e) {
    e.target.parentNode.remove()
}
for (let i = 0; i < document.getElementsByClassName('change').length; i++) {
    document.getElementsByClassName('change')[i].addEventListener('click', changeFunc); 
}
for (let j = 0; j < document.getElementsByClassName('delete').length; j++) {
    document.getElementsByClassName('delete')[j].addEventListener('click', deleteFunc); 
}