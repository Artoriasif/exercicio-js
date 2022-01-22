function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("texto-ano");
  var result = document.getElementById("resultado");

  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    fano.value == null
  ) {
    window.alert("[ERRO] - Verifique os dados e tente novamente.");
  } else {
    var fsex = document.getElementsByName("texto-sexo");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/crianca-homem.jpeg");
      } else if (idade < 21) {
        img.setAttribute("src", "img/jovem-homem.jpeg");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulto-homem.jpeg");
      } else {
        img.setAttribute("src", "img/idoso-homem.jpeg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/crianca-mulher.jpeg");
      } else if (idade < 21) {
        img.setAttribute("src", "img/jovem-mulher.jpeg");
      } else if (idade < 50) {
        img.setAttribute("src", "img/adulta-mulher.jpeg");
      } else {
        img.setAttribute("src", "img/idosa-mulher.jpeg");
      }
    }

    img.style.width = "250px";
    img.style.height = "250px";
    img.style.borderRadius = "7px";
    result.style.textAlign = "center";
    result.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    result.appendChild(img);
  }
}
