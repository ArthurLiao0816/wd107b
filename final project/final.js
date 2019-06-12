function calculate() {
    var fstn = document.getElementById('fstn')
    var operator = document.getElementById('operator')
    var scdn = document.getElementById('scdn')
    var result = document.getElementById('result')
    result.innerText = eval(fstn.value + op.value + scdn.value)
  }