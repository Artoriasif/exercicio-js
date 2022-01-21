function carregar() {
  var msg = window.document.getElementById("mensagem");
  var msg2 = window.document.getElementById("mensagem2");
  var foto = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    foto.src = "img/manha.jpeg";
    document.body.style.background = "#e6cf60";
    msg2.innerHTML = `Bom dia! 🌄`;
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    foto.src = "img/tarde.jpeg";
    document.body.style.background = "#5cbbbd";
    msg2.innerHTML = `Boa tarde! 🌅`;
  } else {
    //BOA NOITE
    foto.src = "img/noite.jpeg";
    document.body.style.background = "#2d3333";
    msg2.innerHTML = `Boa noite! 🌙 `;
  }
}
