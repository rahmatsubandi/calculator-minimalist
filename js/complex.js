function set(op) {
  document.getElementById("display").value += op;
}

function sqrRoot() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.sqrt(tempStore));
}

function asine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.asin(tempStore));
}

function acosine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.acos(tempStore));
}

function log() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.log10(tempStore));
}

function ln() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.log(tempStore));
}

function atangent() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.atan(tempStore));
}

function tangent() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.tan(tempStore));
}

function cosine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.cos(tempStore));
}

function sine() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.sin(tempStore));
}

function percent() {
  display.value = display.value / 100;
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function exp() {
  var tempStore = document.getElementById("display").value;
  document.getElementById("display").value = eval(Math.exp(tempStore));
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function setOp() {
  Swal.fire(`gf`, "", "success");
  document.getElementById("display").value += op;
}

function answer() {
  var Exp = document.getElementById("display");
  var Exp1 = Exp.value;
  var result = eval(Exp1);
  Swal.fire(`The result is ${result}`, "", "success");
  Exp.value = result;
}

function c() {
  var input = document.getElementById("display").value;
  var field = input.field;
  field = "";
  var a = input.substr(0, field);
  document.getElementById("display").value = a;
}

function ce() {
  var elem = document.getElementById("display").value;
  var length = elem.length;
  length--;
  var a = elem.substr(0, length);
  document.getElementById("display").value = a;
}
