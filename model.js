function check() {
  var birthday = document.getElementById("day").value;
  var birmonth = document.getElementById("month").value;
  var result = "";
  var img = document.getElementById("image");

  if ((birmonth == 3 && birthday >= 21) || (birmonth == 4 && birthday <= 20)) {
    result = "Áries";
    img.src = "aries.png";
  }
  if ((birmonth == 4 && birthday > 20) || (birmonth == 5 && birthday <= 20)) {
    result = "Touro";
    img.src = "taurus.png";
  }
  if ((birmonth == 5 && birthday > 20) || (birmonth == 6 && birthday <= 20)) {
    result = "Gêmeos";
    img.src = "gemini.png";
  }
  if ((birmonth == 6 && birthday > 20) || (birmonth == 7 && birthday <= 22)) {
    result = "Câncer";
    img.src = "cancer.png";
  }
  if ((birmonth == 7 && birthday > 22) || (birmonth == 8 && birthday <= 22)) {
    result = "Leão";
    img.src = "leo.png";
  }
  if ((birmonth == 8 && birthday > 22) || (birmonth == 9 && birthday <= 22)) {
    result = "Virgem";
    img.src = "virgo.png";
  }
  if ((birmonth == 9 && birthday > 22) || (birmonth == 10 && birthday <= 22)) {
    result = "Libra";
    img.src = "libra.png";
  }
  if ((birmonth == 10 && birthday > 22) || (birmonth == 11 && birthday <= 21)) {
    result = "Escorpião";
    img.src = "scorpio.png";
  }
  if ((birmonth == 11 && birthday > 21) || (birmonth == 12 && birthday <= 21)) {
    result = "Sagitário";
    img.src = "sagittarius.png";
  }
  if ((birmonth == 12 && birthday > 21) || (birmonth == 1 && birthday <= 20)) {
    result = "Capricórnio";
    img.src = "capricorn.png";
  }
  if ((birmonth == 1 && birthday > 20) || (birmonth == 2 && birthday <= 18)) {
    result = "Aquário";
    img.src = "aquarius.png";
  }
  if ((birmonth == 2 && birthday > 18) || (birmonth == 3 && birthday <= 20)) {
    result = "Peixes";
    img.src = "pisces.png";
  } else if (birmonth > 12 || birthday > 31) {
    result =
      "Favor, verifique novamente se os números digitados estão corretos";
    img.src = "question.png";
  }
  document.getElementById("res").innerHTML = result;
}
