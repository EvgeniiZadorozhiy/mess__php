var t = '';
var m = '';

$(document).ready(someFunc);

function someFunc() {
    var w = window.innerWidth;
    if (w <= 1080) {
        t = '7vh';
        m = '76vh';
    } else {
        t = '7vh';
        m = '73vh';
    }
    return t, m;
}

window.addEventListener('resize', function() {
    someFunc();
});

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //

const textarea = document.querySelector('textarea');
const messages = document.querySelector('iframe');

textarea.addEventListener("keyup", e => {
    textarea.style.height = t;
    messages.style.height = m;
    var scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
    messages.style.height = `calc(${m} + ${t} - ${scHeight}px)`;
})

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //

document.querySelector('button').onclick = new_message;
    
function new_message() {
    // let form = document.querySelector('form');
    // let textareas = form.getElementsByTagName('textarea');
    // for (let textarea of textareas)
    //     textarea.value = '';
    textarea.style.height = t;
    messages.style.height = m;
}

//-||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-//

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', () => {setTimeout(() => {form.reset()},100)});
})

//-||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-//

$(document).ready(function () {
    $('#form').submit(function (e) { // Устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "mess.php", // Путь до php файла отправителя
            data: form_data,
            success: function () {
                
            }
        });
    });
});    

// -|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-//

// var input = document.getElementById("text");

// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         let text = document.getElementById('text').value;
//         // забрали текст
//         if (text != '') {
//             let new_p = document.createElement('p')
//             new_p.innerText = text;
//             // створили новий елемент та надали йому текст
//             let messages = document.getElementById('messages');
//             messages.insertAdjacentElement('afterbegin', new_p)
//             // вставили елемент з текстом на сторінку
//             document.getElementById('text').value = '';
//             // обнулення
//         }
//         textarea.style.height = '10vh';
//         form.style.height = '10vh';
//     }
// });