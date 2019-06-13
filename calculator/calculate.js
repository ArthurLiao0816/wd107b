function calculate() {
    var fsti = document.getElementById('fsti')
    var operator = document.getElementById('operator')
    var scdi = document.getElementById('scdi')
    var result = document.getElementById('result')
    result.innerText = eval(fsti.value + operator.value + scdi.value)
  }