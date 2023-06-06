//Логика для фронта
let button = document.querySelector('#button');
let p = document.querySelector('#data');
//Обработчик событий
button.addEventListener('click', async () => {
    let response = await fetch('http://localhost:9999/api/data');
    if (response.ok) {
        let result = await response.json();
        p.textContent = JSON.stringify(result);
    } else {
        console.log('Error');
    }

});