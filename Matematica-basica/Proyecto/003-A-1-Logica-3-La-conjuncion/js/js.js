jQuery(document).ready(function($) {

  var fila1 = document.querySelectorAll("#fila1 td span");
  var fila2 = document.querySelectorAll("#fila2 td span");
  var fila3 = document.querySelectorAll("#fila3 td span");
  var fila4 = document.querySelectorAll("#fila4 td span");

  var text1 = document.querySelectorAll("#fila1  select");
  var text2 = document.querySelectorAll("#fila2  select");
  var text3 = document.querySelectorAll("#fila3  select");
  var text4 = document.querySelectorAll("#fila4  select");

  var btn_exe = document.querySelector('.w3-container [type="button"]');

  btn_exe.addEventListener("click", evalua);

  // //////////////////////////////////////////////////////////
  function evalua() {

    // ----------------------------------------------------

    if ((text1[0].value == 1) && (text1[1].value == 1)) {
      fila1[0].innerHTML = "Verdad";
    } else {
      fila1[0].innerHTML = "Falsedad";
    }

    // ----------------------------------------------------

    if ((text2[0].value == 1) && (text2[1].value == 1)) {
      fila2[0].innerHTML = "Verdad";
    } else {
      fila2[0].innerHTML = "Falsedad";
    }

    // ----------------------------------------------------

    if ((text3[0].value == 1) && (text3[1].value == 1)) {
      fila3[0].innerHTML = "Verdad";
    } else {
      fila3[0].innerHTML = "Falsedad";
    }

    // ----------------------------------------------------
    if ((text4[0].value == 1) && (text4[1].value == 1)) {
      fila4[0].innerHTML = "Verdad";
    } else {
      fila4[0].innerHTML = "Falsedad";
    }

    // ----------------------------------------------------

  }
  // //////////////////////////////////////////////////////////

  // 

  // ///////////////////////////////////////////////////////////
  //  Test elementos seleccionados 
  // ///////////////////////////////////////////////////////////

  for (var i = 0; i < fila1.length; i++) {
    console.log(fila1[i]);

  }

  for (var i = 0; i < text1.length; i++) {
    console.log(text1[i]);

  }
  // --------------------------------------------------

  console.log('--------------------------');
  for (var i = 0; i < fila2.length; i++) {
    console.log(fila2[i]);
  }

  for (var i = 0; i < text2.length; i++) {
    console.log(text2[i]);

  }
  // --------------------------------------------------

  console.log('--------------------------');
  for (var i = 0; i < fila3.length; i++) {
    console.log(fila3[i]);
  }

  for (var i = 0; i < text3.length; i++) {
    console.log(text3[i]);

  }
  // --------------------------------------------------
  console.log('--------------------------');
  for (var i = 0; i < fila4.length; i++) {
    console.log(fila4[i]);
  }

  for (var i = 0; i < text4.length; i++) {
    console.log(text4[i]);

  }
  console.log('--------------------------');
  console.log(btn_exe);

});