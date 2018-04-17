$(document).ready(function() {

  var picAt = 2;
  var count = 0;

  setInterval(function() {
    if (count == 5) {
      change();
    } else {
      count++;
    }
  }, 1000);

  var change = function(){
    if (picAt == 1) {
      picAt = 2;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "color: white; background-color: orange; background-image: url(img/saga2covertrans.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
        $("#cover").html("<h1>UTAU Sports Day 2018~!</h1><p>Come and join the event.<br />UTSD comes to global~!!</p><p><a class=\"btn btn-lg\" role=\"button\" style=\"color: orange; background-color: white;\" href=\"http://www.printmov.com/usd2018.html\" target=\"_BLANK\"></span>Read more</a></p>");
      }).fadeTo(1, 1);
    } else if (picAt == 2) {
      picAt = 3;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "background-color: white; color: black; background-image: url(img/saga2covertrans.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
        $("#cover").html("<h1>2 New Languages!!</h1><p>Chinese and Spanish are on the way~!!<br /><b>The voice libraries are still in process.<b></p><p><a class=\"btn btn-primary btn-lg\" role=\"button\"><span class=\"glyphicon glyphicon-heart\"></span> Stay Tuned~!!</a></p>");
      }).fadeTo(1, 1);
    } else {
      picAt = 1;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "color: white; background-color: #2286D2; background-image: url(img/saga2covertrans.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
        $("#cover").html("<h1>PRINTmov Saga 2</h1><p>PRINTmov UTAU Saga 2 is coming.<br />Better quality with special system.</p><p><a class=\"btn btn-primary btn-lg\" href=\"saga2.html\" role=\"button\">Learn more</a></p>");
      }).fadeTo(1, 1);
    }
    count = 0;
  };

  setInterval(function() {
    if (picAt == 2) {
      $("#c1").attr("style", "color: black;");
      $("#c2").attr("style", "color: grey;");
      $("#c3").attr("style", "color: grey;");
    } else if (picAt == 3) {
      $("#c1").attr("style", "color: grey;");
      $("#c2").attr("style", "color: black;");
      $("#c3").attr("style", "color: grey;");
    } else {
      $("#c1").attr("style", "color: grey;");
      $("#c2").attr("style", "color: grey;");
      $("#c3").attr("style", "color: black;");
    }
  }, 1);

  $("#c1").on("click", function() {
    if (picAt != 2) {
      picAt = 1;
      change();
    }
  });
  $("#c2").on("click", function() {
    if (picAt != 3) {
      picAt = 2;
      change();
    }
  });
  $("#c3").on("click", function() {
    if (picAt != 1) {
      picAt = 3;
      change();
    }
  });

  var voiceButton$ = $('.voice-button');
  var voice$ = $('.voice')
  voiceButton$.click(function() {
    if( $('.voice-logo').attr('class').includes('glyphicon-play') ) {
      voiceButton$.html('<span class="glyphicon glyphicon-stop voice-logo" aria-hidden="true"></span> Stop Voice Sample');
      voice$.trigger('play');
    } else {
      voiceButton$.html('<span class="glyphicon glyphicon-play voice-logo" aria-hidden="true"></span> Play Voice Sample');
      voice$.trigger('load');
    }
  })

  voice$.on('ended', function() {
    voiceButton$.html('<span class="glyphicon glyphicon-play voice-logo" aria-hidden="true"></span> Play Voice Sample');
  })

});
