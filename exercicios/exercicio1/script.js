function carregar() {
  var msg = window.document.getElementById("mensagem");
  var foto = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    foto.src = "img/manha.jpeg";
    document.body.style.background = "#e6cf60";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    foto.src = "img/tarde.jpeg";
    document.body.style.background = "#5cbbbd";
  } else {
    //BOA NOITE
    foto.src = "img/noite.jpeg";
    document.body.style.background = "#2d3333";
  }
}
