document.addEventListener('DOMContentLoaded', function() {

    const nameInput = document.getElementById('NameInput');
    const emailInput = document.getElementById('EmailInput');
    const passwordInput = document.getElementById('PasswordInput');
    const repeatPasswordInput = document.getElementById("RepeatPasswordInput");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const DateOfBirthInput = document.getElementById('DateOfBirthInput');
    const countrySelect = document.getElementById("CountrySelect");
    const radioYes = document.getElementById("RadioYes");
    const radioNo = document.getElementById("RadioNo");


    const nameValidationField = document.getElementById('NameValidationField');
    const emailValidationField = document.getElementById('EmailValidationField');
    const passwordValidationField = document.getElementById("PasswordValidationField");
    const CheckBoxValidationField = document.getElementById('HobbyValidationField');
    const DateValidationField = document.getElementById('DateValidationField');
    const countryValidationField = document.getElementById("CountryValidationField");
    const mailingValidationField = document.getElementById("MailingValidationField");

////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ ИМЕНИ
////////////////////////////////////////////////////////////////

nameInput.addEventListener('blur', () => {
  const nameValue = nameInput.value.trim();

  if (nameValue === '') {
    nameValidationField.textContent = 'Введите ваше имя';
  } else if (/\d/.test(nameValue)) {
    nameValidationField.textContent = 'Имя не может содержать цифры';
  } else {
    nameValidationField.textContent = '';
  }
});





////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ ЭЛЕКТРОННОГО АДРЕСА
////////////////////////////////////////////////////////////////

emailInput.addEventListener('blur', () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    emailValidationField.textContent = 'Введите email';
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    emailValidationField.textContent = 'Вы ввели некорректный email';
  } else {
    emailValidationField.textContent = '';
  }
});





////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ ПАРОЛЕЙ
////////////////////////////////////////////////////////////////

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length < 8) {
    passwordValidationField.textContent = "Пароль должен состоять из 8 символов";
  } else if (!/\d/.test(passwordInput.value) || !/[a-zA-Z]/.test(passwordInput.value)) {
    passwordValidationField.textContent = "Пароль должен содержать хотя бы одну букву и одну цифру";
  } else {
    passwordValidationField.textContent = "";
  }
});

repeatPasswordInput.addEventListener("blur", () => {
  if (passwordInput.value !== repeatPasswordInput.value) {
    passwordValidationField.textContent = "Пароли должны совпадать";
  } else {
    passwordValidationField.textContent = "";
  }
});





////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ ХОББИ
////////////////////////////////////////////////////////////////

function validateHobby() {
  let checkedCount = 0;

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    CheckBoxValidationField.textContent = 'Выберите как минимум один вариант';
  } else {
    CheckBoxValidationField.textContent = '';
  }
}

validateHobby();

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', validateHobby);
}





////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ ДАТЫ РОЖДЕНИЯ
////////////////////////////////////////////////////////////////

DateOfBirthInput.addEventListener('blur', function() {
  const dateOfBirth = DateOfBirthInput.value;
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = regex.exec(dateOfBirth);

  if (!match) {
    DateValidationField.textContent = 'Введите пожалуйста дату';
    return;
  }

  const day = parseInt(match[1]);
  const month = parseInt(match[2]);
  const year = parseInt(match[3]);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    DateValidationField.textContent = 'Дата должна быть в формате  DD/MM/YYYY';
    return;
  }

  const dateObject = new Date(year, month - 1, day);
  if (dateObject.getDate() !== day || dateObject.getMonth() !== month - 1 || dateObject.getFullYear() !== year) {
    DateValidationField.textContent = 'Введите пожалуйста корректную дату';
    return;
  }

  DateValidationField.textContent = '';
});






////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ СТРАНЫ ПРОЖИВАНИЯ
////////////////////////////////////////////////////////////////

// Добавляем обработчик события изменения выбора страны в select
countrySelect.addEventListener("change", () => {
  if (countrySelect.selectedIndex === 0) {
    countryValidationField.innerText = "Выберите страну";
  } else {
    countryValidationField.innerText = "";
  }
});





////////////////////////////////////////////////////////////////
///////////////////ВАЛИДАЦИЯ РАССЫЛКИ
////////////////////////////////////////////////////////////////

function validateMailing() {
  if (!radioYes.checked && !radioNo.checked) {
    mailingValidationField.textContent = "Выберите один из вариантов";
  } else {
    mailingValidationField.textContent = "";
  }
}

validateMailing();

radioYes.addEventListener("change", validateMailing); 
radioNo.addEventListener("change", validateMailing);


});
