function checkInput() {
    const input = document.getElementById("Task1NumberInput");
    let value = input.value.padStart(4, "0").substring(0, 4);
    if (value !== input.value) {
      input.value = value;
    }
    input.setCustomValidity("");
  }


function isNumberKey(evt) {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      return false;
    }
    return true;
  }

  function encrypt() {
    
    var promptNumber =  document.getElementById("Task1NumberInput").value;
    var encryptedNumber = "";
    
    if (promptNumber.length === 4) {
      for (var i = 0; i < 4; i++) {
        var digit = parseInt(promptNumber.charAt(i));
        var sum = (digit + 7) % 10;
        encryptedNumber += sum.toString();
      }
      var firstDigit = encryptedNumber.charAt(0);
      var secondDigit = encryptedNumber.charAt(1);
      var thirdDigit = encryptedNumber.charAt(2);
      var fourthDigit = encryptedNumber.charAt(3);
      var newNumber = thirdDigit + fourthDigit + firstDigit + secondDigit;
      document.getElementById("Task1result").innerHTML = newNumber;
    } else {
      alert("Введите четырехзначное число!");
    }
    document.getElementById("Task1result").style.display = "block";
  }

  function trianglearea(a, b , c){
    if(a+b>c && a+c>b && b+c>a){
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("Task2result").innerHTML = area.toFixed(2);}
    else{
      document.getElementById("Task2result").innerHTML = "Не является трегуольником";
    }
  }

  function distanta() {
    var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
    x1 = document.getElementById("x1").value;
    y1 = document.getElementById("y1").value;
    x2 = document.getElementById("x2").value;
    y2 = document.getElementById("y2").value;

    var result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    document.getElementById("Task3result").innerHTML = result.toFixed(2);
    document.getElementById("Task3result").style.display = "flex";
  }

  function itogo (){
    var itogo = 0;
    itogo += Number(document.getElementById('1t4').value);
    itogo += Number(document.getElementById('2t4').value);
    itogo += Number(document.getElementById('3t4').value);
    itogo += Number(document.getElementById('4t4').value);
    itogo += Number(document.getElementById('5t4').value);
    
    document.getElementById('Task4result').innerHTML = itogo + ' MDL';
  }