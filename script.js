function verificarPrimo() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outResposta = document.getElementById('outResposta')

  //Obtem conteúdo do campo de entrada
  let num = Number(inNumero.value)

  //Verifica se preencheu corretamente 
  if (num == 0 || isNaN(num)) {
    alert('Número inválido...')
    inNumero.focus()
    return
  }
  //Declara e inicializa a variável tipo flag
  let temDivisor = 0

  //Percorre todos os possíveis divisores de num
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0 ) {
      temDivisor = 1 //Muda o flag
      break //Sai da repetição
    }
  }
  //Se num > 1 e não possui divisor
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + ', É primo!'
  } else {
    outResposta.textContent = num + ', Não é primo!'
  }
}
//Referencia elemento e após associa function ao evento click
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarPrimo)