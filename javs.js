var conta = document.getElementById('quantidade')
var custom = document.getElementById('custom')
function borda() {
    value = ''
    conta.style.textAlign = 'right'
    focus()
    
    conta.style.border = 'solid 4px'
    conta.style.borderColor = 'hsl(172, 67%, 45%)'
  }
function bordaCust() {
    custom.value = ''
    custom.style.textAlign = 'right'
    focus()
    custom.style.border = 'solid 4px'
    custom.style.borderColor = 'hsl(172, 67%, 45%)'
}
  conta.addEventListener('click', borda)
  custom.addEventListener('click', bordaCust)

