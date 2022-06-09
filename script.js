function transforma(num) {
  if (num <= 9)
    return `0${num}`
  return `${num}` //funcao para somar a string 0 a [dia, mes, hora, min, seg]
} 

function imprime() {
  const hora = transforma(new Date().getHours()) // horas
  const dia = transforma(new Date().getDate()) // 1-31
  const mes = transforma(new Date().getMonth()) // 0-11 (zero=janeiro)         // 2 dígitos
  const ano4 = new Date().getFullYear() // 4 dígitos
  const min = transforma(new Date().getMinutes()) // 0-59
  const seg = transforma(new Date().getSeconds()) // 0-59

  msg.innerHTML = `<strong>Hoje: ${dia}/${mes}/${ano4} || Horário: ${hora}:${min}:${seg}</strong>`
  if (hora >= 0 && hora < 12) {
    img.src = './src/img/sun.png'
    document.body.style.background = '#e2cd9f' // CODIGO PARA O DIA DAS 0 HORAS AS 12 HORAS
  } else if (hora >= 12 && hora < 18) {
    img.src = './src/img/afternoon.png'
    document.body.style.background = '#b9846f' // CODIGO PARA O DIA DAS 12 HORAS AS 18 HORAS
  } else {
    img.src = './src/img/night.png'
    document.body.style.background = '#515154' // para qualquer outra hora
  }
}

function carregar() {
  const msg = window.document.getElementById('msg') // vai pegar o id mensagem
  const img = window.document.getElementById('img') // vai pegar o id da imagem
    
  setInterval(() => {
      imprime()
      console.log('rola')
  }, 100);
  
}
carregar()