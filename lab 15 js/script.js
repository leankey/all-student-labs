function task1() {
  const obj = {js: 'test', jq: 'hello', css: 'world'};
  const keys = Object.keys(obj);
  const keysString = keys.join(', ');
  document.getElementById('task1span').innerHTML = keysString;
  document.getElementById("task1span").style.display = "block";
}


const employees = [
  { name: "John", salary: 2000 },
  { name: "Bob", salary: 1500 },
  { name: "Alice", salary: 2500 },
  { name: "Mary", salary: 1800 },
  { name: "Peter", salary: 2200 },
];

function findClosestToAverageEmployee() {
  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employees.length;

  let minDeviation = Infinity;
  let closestEmployeeIndex = -1;

  for (let i = 0; i < employees.length; i++) {
    const deviation = Math.abs(employees[i].salary - averageSalary);

    if (deviation < minDeviation) {
      minDeviation = deviation;
      closestEmployeeIndex = i;
    }
  }

  const employee = employees[closestEmployeeIndex];


  document.getElementById("task2result1").innerHTML = '<b>Средняя зарплата:</b> ' + averageSalary  + `<br> Имя: ${employee.name}, Зарплата: ${employee.salary}`;
}

function findTwoHighestSalaryEmployees() {
  const sortedEmployees = employees.sort((a, b) => b.salary - a.salary);
  const highestSalaryEmployees = sortedEmployees.slice(0, 2);

  const result = highestSalaryEmployees.map((employee) => `${employee.name} (${employee.salary})`).join(", ");

  document.getElementById("task2result2").innerHTML = '<br><b>Самые высокие зарплаты:</b> <br>' + result;
}

function ShowResultsTask2(){

}



function sortArray() {

  // Генерация случайного массива из 10 чисел от -100 до 100
var array = Array.from({length: 10}, () => Math.floor(Math.random() * 201) - 100);

  var negative = [];
  var positive = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negative.push(array[i]);
    } else {
      positive.push(array[i]);
    }
  }

  negative.sort(function(a, b) {
    return b - a;
  });

  positive.sort(function(a, b) {
    return a - b;
  });

  var result = negative.concat(positive);

  var arrayA = "Массив A = [" + array.join(", ") + "]";
  var arrayB = "<br> Массив B = [" + result.join(", ") + "]";

  document.getElementById("arrayA").innerHTML = arrayA;
  document.getElementById("arrayB").innerHTML = arrayB;
}



function showNow() {
  alert(new Date());
}

function showYesterday() {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  alert(yesterday);
}

function show10YearsAgo() {
  var tenYearsAgo = new Date();
  tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
  alert(tenYearsAgo);
}

function showNextWeek() {
  var nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  alert(nextWeek);
}


function displayMonth() {
  var inputDate = new Date(document.getElementById("task6input").value);
  var monthName = inputDate.toLocaleString('default', { month: 'long' });
  document.getElementById("task6span").innerHTML = "Вы выбрали " + monthName;
}


function reverseWords() {
  // Получаем значение из input
  const inputValue = document.getElementById("task7input").value;

  // Разбиваем строку на слова и переворачиваем каждое слово
  const reversedWords = inputValue.split(' ').map(word => word.split('').reverse().join(''));

  // Объединяем перевернутые слова в строку и выводим результат в span
  const reversedString = reversedWords.join(' ');
  document.getElementById("task7span").textContent = reversedString;
}


function extractPhoneNumber() {
  // Получаем значение из input
  const inputValue = document.getElementById("task8input").value;

  // Разбиваем строку на части по заданным разделителям
  const [countryCode, phoneNumber] = inputValue.split(/[( )-]/g).filter(Boolean);
  // Выводим извлеченные данные в span элементы
  document.getElementById("task8area").textContent = countryCode;
  document.getElementById("task8num").textContent = phoneNumber;
}