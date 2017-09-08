$(window).on("load", function() {

  var playing = 0;
  var offvocalOn = true;
  var timer = 0;
  var check = 0;

  $('#name').text("Please select UTAUloid to make it sing!");

  $('#offvocal')[0].play();
  $('#printto')[0].play();
  $('#yokina')[0].play();
  $('#crystalline')[0].play();
  $('#unn')[0].play();
  $('#ron')[0].play();
  // $('#komuri')[0].play();
  // $('#chaiyo')[0].play();
  $('#quint')[0].play();
  $('#prinn')[0].play();

  $('#printto').prop("volume", 0);
  $('#yokina').prop("volume", 0);
  $('#crystalline').prop("volume", 0);
  $('#unn').prop("volume", 0);
  $('#ron').prop("volume", 0);
  // $('#komuri').prop("volume", 0);
  // $('#chaiyo').prop("volume", 0);
  $('#quint').prop("volume", 0);
  $('#prinn').prop("volume", 0);

  $('#offvocal_btn').click(function() {
    if (offvocalOn == false) {
      $('#offvocal').prop("volume", 1);
      offvocalOn = true;
      $('#offvocal_btn').text("Instrumental is on");
      console.log("offvocal is on");
    } else {
      $('#offvocal').prop("volume", 0);
      offvocalOn = false;
      $('#offvocal_btn').text("Instrumental is off");
      console.log("offvocal is off");
    }
  });

  $('#printto_btn').click(function() {
    if (playing == 1) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Printto Magicbeat <span class=\"badge\">Saga 1</span>");
      $('#image').attr("src", "small/printto.png");
      playing = 1;
      console.log("Playing Printto");
    }
  });

  $('#yokina_btn').click(function() {
    if (playing == 2) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Yokina Magicbeat <span class=\"badge\">Saga 1</span>");
      $('#image').attr("src", "small/yokina.png");
      playing = 2;
      console.log("Playing Yokina");
    }
  });

  $('#crystalline_btn').click(function() {
    if (playing == 3) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Crystalline Magicbeat <span class=\"badge\">Saga 2</span>");
      $('#image').attr("src", "small/crystalline.png");
      playing = 3;
      console.log("Playing Crystalline");
    }
  });

  $('#unn_btn').click(function() {
    if (playing == 4) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Unnññlununlnlnunlnñ <span class=\"badge\">Saga 2</span>");
      $('#image').attr("src", "small/unn.png");
      playing = 4;
      console.log("Playing UNN");
    }
  });

  $('#ron_btn').click(function() {
    if (playing == 5) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Ron Beataholic <span class=\"badge\">Saga 1</span>");
      $('#image').attr("src", "small/ron.png");
      playing = 5;
      console.log("Playing Ron");
    }
  });

  $('#komuri_btn').click(function() {
    if (playing == 6) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Komuri Melogic <span class=\"badge\">Low quality</span>");
      $('#image').attr("src", "small/komuri.png");
      playing = 6;
      console.log("Playing Komuri");
    }
  });

  $('#chaiyo_btn').click(function() {
    if (playing == 7) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("Chaiyo Juven <span class=\"badge\">Low quality</span>");
      $('#image').attr("src", "small/chaiyo.png");
      playing = 7;
      console.log("Playing Chaiyo");
    }
  });

  $('#quint_btn').click(function() {
    if (playing == 8) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("QuinT F.Angelic <span class=\"badge\">Crossover</span>");
      $('#image').attr("src", "small/quint.png");
      playing = 8;
      console.log("Playing Quint");
    }
  });

  $('#prinn_btn').click(function() {
    if (playing == 9) {
      $('#name').text("Please select UTAU.");
      $('#image').attr("src", "utauloid/none.png");
      playing = 0;
    } else {
      $('#name').html("PrInN F.Angelic <span class=\"badge\">Crossover</span>");
      $('#image').attr("src", "small/prinn.png");
      playing = 9;
      console.log("Playing PrInN");
    }
  });

  setInterval(function() {
    if (playing == 1) {
      $('#printto').prop("volume", 1);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 2) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 1);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 3) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 1);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 4) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 1);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 5) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 1);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 6) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 1);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 7) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 1);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    } else if (playing == 8) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 1);
      $('#prinn').prop("volume", 0);
    } else if (playing == 9) {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 1);
    } else {
      $('#printto').prop("volume", 0);
      $('#yokina').prop("volume", 0);
      $('#crystalline').prop("volume", 0);
      $('#unn').prop("volume", 0);
      $('#ron').prop("volume", 0);
      // $('#komuri').prop("volume", 0);
      // $('#chaiyo').prop("volume", 0);
      $('#quint').prop("volume", 0);
      $('#prinn').prop("volume", 0);
    }
  }, 1);

});
