function carregar() {
  var msg = window.document.getElementById('msg') // vai pegar o id mensagem
  var img = window.document.getElementById('img') // vai pegar o id da imagem
  var hora = new Date().getHours() // horas
  var dia = new Date().getDate() // 1-31
  var mes = new Date().getMonth() // 0-11 (zero=janeiro)         // 2 dígitos
  var ano4 = new Date().getFullYear() // 4 dígitos
  var min = new Date().getMinutes() // 0-59
  var seg = new Date().getSeconds() // 0-59

  msg.innerHTML = `<strong>Hoje é dia ${dia}/${mes}/${ano4} e são ${hora}:${min}:${seg} horas!</strong>`
  if (hora >= 0 && hora < 12) {
    img.src = 'DataHoraReal/imagem/sun.png'
    document.body.style.background = '#e2cd9f' // CODIGO PARA O DIA DAS 0 HORAS AS 12 HORAS
  } else if (hora >= 12 && hora < 18) {
    img.src = '/DataHoraReal/imagem/afternoon.png'
    document.body.style.background = '#b9846f' // CODIGO PARA O DIA DAS 12 HORAS AS 18 HORAS
  } else {
    img.src = '/DataHoraReal/imagem/night.png'
    document.body.style.background = '#515154' // para qualquer outra hora
  }
}
