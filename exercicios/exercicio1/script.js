var intervald = window.setInterval(() => {
  carregar();
}, 1000);
function carregar() {
  var msg = window.document.getElementById("mensagem");
  var msg2 = window.document.getElementById("mensagem2");
  var foto = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();
  msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;

  if (hora < 6) {
    foto.src = "img/madrugada.jpeg";
    document.body.style.background = "#000";
    msg2.innerHTML = "Boa madrugada!";
  } else if (hora < 12) {
    foto.src = "img/manha.jpeg";
    document.body.style.background = "#e6cf60";
    msg2.innerHTML = `Bom dia! 🌄`;
  } else if (hora < 18) {
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
