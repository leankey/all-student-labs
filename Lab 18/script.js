document.addEventListener('DOMContentLoaded', function() {
document.getElementById('task1btn').addEventListener('click', function() {
    // Создаем новый элемент input
    var newInput = document.createElement('input');
    newInput.className = 'form-control';
    newInput.type = 'text';
    newInput.style = 'margin-top:3px'
  
    // Находим div, в котором находится исходный input
    var task1Div = document.getElementById('task1div');
  
    // Добавляем новый input в div
    task1Div.appendChild(newInput);
});


// Получаем кнопку и добавляем обработчик события клика
var task2Btn = document.getElementById('task2btn');
task2Btn.addEventListener('click', function() {
    // Получаем список и последний элемент списка
    var task2List = document.getElementById('task2list');
    var lastListItem = task2List.lastElementChild;
    
    // Удаляем последний элемент списка
    task2List.removeChild(lastListItem);
});

// Получаем кнопку и список и добавляем обработчик события клика
var task3btn = document.getElementById('task3btn');
var list = document.getElementById('task2list');
task3btn.addEventListener('click', function() {
    // Создаем новый элемент списка
    var newListItem = document.createElement('li');
    newListItem.textContent = 'пункт';

    // Добавляем новый элемент списка в конец списка
    list.appendChild(newListItem);
});



var task4btn = document.getElementById('task4btn');
var task4list = document.getElementById('task4list');

task4btn.addEventListener('click', function() {
  // Запросить у пользователя элементы массива
  var input = prompt('Введите элементы массива через пробел или запятую:');
  var array = input.split(/[ ,]+/); // Разбить строку на массив

  // Добавить элементы массива в конец списка
  for (var i = 0; i < array.length; i++) {
    var newItem = document.createElement('li');
    newItem.textContent = array[i];
    task4list.appendChild(newItem);
  }
});




var task5Btn = document.getElementById('task5btn');
task5Btn.addEventListener('click', function() {
    // Находим элемент input
    var input = document.getElementById('task5input');
    
  
    // Получаем значение из input и преобразуем его в массив
    var array = input.value.split(/[ ,]+/);
  
    // Создаем новый div
    var newDiv = document.createElement('div');
    newDiv.align = 'center';
    newDiv.className ='mt-2';
  
    // Проходим по всем элементам массива и добавляем их в новый div в виде p элементов
    for (var i = 0; i < array.length; i++) {
        var newP = document.createElement('p');
        
        newP.textContent = array[i];
        newP.style='align:center; font-size:2em !important;';
        newP.className ='badge rounded color1 ms-2';
        newDiv.appendChild(newP);

    }
  
    // Находим body и добавляем в конец созданный div
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(newDiv);
    input.value ='';
});


});