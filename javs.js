var conta = document.getElementById('quantidade')
var custom = document.getElementById('custom')
var nPessoa = document.getElementById("numeroPessoa")
var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")
var op3 = document.getElementById("op3")
var op4 = document.getElementById("op4")
var op5 = document.getElementById("op5")
var botao = document.getElementById("botReset")
var vl1 = document.getElementById("valor1")
var vl2 = document.getElementById("valor2")

$('#logoImg').fadeOut(0)
$('#logoImg').fadeIn(1000)

function borda() {
    
    conta.style.textAlign = 'right'
    conta.style.border = 'solid 4px'
    conta.style.borderColor = 'none'
    focus()
   
    custom.style.border = 'none'
    nPessoa.style.border = 'none'

  }
function bordaCust() {
    
    custom.style.textAlign = 'right'
    custom.style.borderColor = 'hsl(172, 67%, 45%)'

    nPessoa.style.border = 'none'
    conta.style.border = 'none'
   
  

 
}
function inpPessoa() {
  
  nPessoa.style.textAlign = 'right'
  focus()
  nPessoa.style.border = 'solid 4px'
  nPessoa.style.borderColor = 'hsl(172, 67%, 45%)'
  conta.style.border = 'none'
  custom.style.border = 'none' 
}


function opc1() {
  
  op1.style.backgroundColor ='hsl(172, 67%, 45%)'
  op1.style.color = 'rgb(1, 82, 82)'

  op2.style.background = 'hsl(183, 100%, 15%)'
  op2.style.color = 'white'

  op3.style.background = 'hsl(183, 100%, 15%)'
  op3.style.color = 'white'

  op4.style.background = 'hsl(183, 100%, 15%)'
  op4.style.color = 'white'

  op5.style.background = 'hsl(183, 100%, 15%)'
  op5.style.color = 'white'

  nPessoa.style.border = 'none'
  conta.style.border = 'none'
  custom.style.border = 'none'

  custom.placeholder = 'Custom'
  custom.style.textAlign = 'center'
  }


function opc2() {
  op2.style.background = 'hsl(172, 67%, 45%)'
  op2.style.color = 'rgb(1, 82, 82)'

  op3.style.background = 'hsl(183, 100%, 15%)'
  op3.style.color = 'white'

  op4.style.background = 'hsl(183, 100%, 15%)'
  op4.style.color = 'white'

  op5.style.background = 'hsl(183, 100%, 15%)'
  op5.style.color = 'white'

  op1.style.background = 'hsl(183, 100%, 15%)'
  op1.style.color = 'white'

  nPessoa.style.border = 'none'
  conta.style.border = 'none'
  custom.style.border = 'none'

  custom.placeholder = 'Custom'
  custom.style.textAlign = 'center'
}


function opc3() {
  op3.style.background = 'hsl(172, 67%, 45%)'
  op3.style.color = 'rgb(1, 82, 82)'

  op4.style.background = 'hsl(183, 100%, 15%)'
  op4.style.color = 'white'

  op5.style.background = 'hsl(183, 100%, 15%)'
  op5.style.color = 'white'

  op1.style.background = 'hsl(183, 100%, 15%)'
  op1.style.color = 'white'

  op2.style.background = 'hsl(183, 100%, 15%)'
  op2.style.color = 'white'

  nPessoa.style.border = 'none'
  conta.style.border = 'none'
  custom.style.border = 'none'

  custom.placeholder = 'Custom'
  custom.style.textAlign = 'center'
}


function opc4() {
  op4.style.background = 'hsl(172, 67%, 45%)'
  op4.style.color = 'rgb(1, 82, 82)'

  op5.style.background = 'hsl(183, 100%, 15%)'
  op5.style.color = 'white'

  op1.style.background = 'hsl(183, 100%, 15%)'
  op1.style.color = 'white'

  op2.style.background = 'hsl(183, 100%, 15%)'
  op2.style.color = 'white'

  op3.style.background = 'hsl(183, 100%, 15%)'
  op3.style.color = 'white'

  nPessoa.style.border = 'none'
  conta.style.border = 'none'
  custom.style.border = 'none'

  custom.placeholder = 'Custom'
  custom.style.textAlign = 'center'
}


function opc5() {
  op5.style.background = 'hsl(172, 67%, 45%)'
  op5.style.color = 'rgb(1, 82, 82)'

  op4.style.background = 'hsl(183, 100%, 15%)'
  op4.style.color = 'white'

  op3.style.background = 'hsl(183, 100%, 15%)'
  op3.style.color = 'white'

  op2.style.background = 'hsl(183, 100%, 15%)'
  op2.style.color = 'white'

  op1.style.background = 'hsl(183, 100%, 15%)'
  op1.style.color = 'white'

  nPessoa.style.border = 'none'
  conta.style.border = 'none'
  custom.style.border = 'none'

  custom.placeholder = 'Custom'
  custom.style.textAlign = 'center'
}

function focs() {
  conta.style.border = 'none'
  custom.style.border = 'none'
  nPessoa.style.border = 'none'
}

function bot() {
  botao.style.background = 'hsl(185, 41%, 84%)'
  }
  function bot2() {
    botao.style.background = 'hsl(172, 67%, 45%)'
    }
    function resetar() {
     
      custom.value = ''
      conta.value = ''
      nPessoa.value = ''
      op1.style.backgroundColor = 'hsl(183, 100%, 15%)'
      op1.style.color = 'white'

      op2.style.background = 'hsl(183, 100%, 15%)'
      op2.style.color = 'white'

      op3.style.background = 'hsl(183, 100%, 15%)'
      op3.style.color = 'white'

      op4.style.background = 'hsl(183, 100%, 15%)'
      op4.style.color = 'white'

      op5.style.background = 'hsl(183, 100%, 15%)'
      op5.style.color = 'white'
      vl1.innerHTML = '$0.00'
      vl2.innerHTML = '$0.00'
      }


function calc() { //Calcula a porcentagem selecionada da gorjeta de acordo com o valor da conta e divide a conta com o número de pessoas informado.
  
  var qtdPessoa = parseFloat(nPessoa.value)
  var porcentagem

   if (op1.style.color == 'rgb(1, 82, 82)') {
   opval1 = parseFloat(conta.value)
    porcentagem = opval1 * 5 / 100
    opval1+= porcentagem
    resultado = opval1/qtdPessoa  
   
 
  
}
  else if (op2.style.color == 'rgb(1, 82, 82)') {
    opval1 = parseFloat(conta.value)
    porcentagem = opval1 * 10 / 100
    opval1 += porcentagem
    resultado = opval1 / qtdPessoa
    
     
    
  }
  else if (op3.style.color == 'rgb(1, 82, 82)') {
    opval1 = parseFloat(conta.value)
    porcentagem = opval1 * 15 / 100
    opval1 += porcentagem
    resultado = opval1 / qtdPessoa
   
     
    
  }
  else if (op4.style.color == 'rgb(1, 82, 82)') {
    opval1 = parseFloat(conta.value)
    porcentagem = opval1 * 25 / 100
    opval1 += porcentagem
    resultado = opval1 / qtdPessoa
  }
  
  else if (op5.style.color == 'rgb(1, 82, 82)') {
    opval1 = parseFloat(conta.value)
    porcentagem = opval1 * 50 / 100
    opval1 += porcentagem
    resultado = opval1 / qtdPessoa
   
   
   
  }
  else if (custom.style.border) {
    opval1 = parseFloat(conta.value)
    opvalCustom = parseFloat(custom.value)
    porcentagem = opval1 * opvalCustom / 100
    opval1 += porcentagem
    resultado = opval1 / qtdPessoa
  }
  if (conta.value  && nPessoa.value) {
    vl1.innerHTML = `$${porcentagem.toFixed(2)}`
    vl2.innerHTML = `$${resultado.toFixed(2)}`
  }
  
 
}

  addEventListener('input', calc) //Chama a função ao adicionar algum valor em qualquer input
  botao.addEventListener('click', resetar) //reseta todos os campos
  botao.addEventListener('mouseenter', bot) //chama um evento no botão para mudar o background quando o mouse estiver em cima
  botao.addEventListener('mouseout', bot2) //Volta o background original
  op1.addEventListener('click', opc1)
  op2.addEventListener('click', opc2)
  op3.addEventListener('click', opc3)
  op4.addEventListener('click', opc4)
  op5.addEventListener('click', opc5)
  conta.addEventListener('click', borda) 
  custom.addEventListener('click', bordaCust)
  nPessoa.addEventListener('click', inpPessoa)
  document.addEventListener('click', focs)
