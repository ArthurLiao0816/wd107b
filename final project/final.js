function calculate() {
    var fsti = document.getElementById('fstn')
    var operator = document.getElementById('operator')
    var scdi = document.getElementById('scdn')
    var result = document.getElementById('result')
    result.innerText = eval(fstn.value + operator.value + scdn.value)
  }