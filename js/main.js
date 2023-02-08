function sum(a,b) {
  var a;
  var b;
  return a+b;
}

function sub(a,b) {
  var a;
  var b;
  return a-b;
}

function mult(a,b) {
  var a;
  var b;
  return a*b;
}

function divide(a,b) {
  var a;
  var b;
  return a/b;
}

// function pegaInfoForm() {
//   var nome = document.getElementById('nome-form').value;
//   var email = document.getElementById('email-form').value;
//   var msg = document.getElementById('msg-form').value;
//   var dados = [nome,email,msg];
//   return console.write(dados);
// }

var nome = document.getElementById('nome-form');
var email = document.getElementById('email-form');
var msg = document.getElementById('msg-form');
var dados = [nome,email,msg];

document.querySelector('form.formContato').addEventListener('submit', function (e) {
    //previne o envio do formulario
    e.preventDefault();
    console.log([nome.value,email.value,msg.value]);    
});