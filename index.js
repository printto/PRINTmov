$(document).ready(function() {

  var picAt = 1;
  var count = 0;
  setInterval(function() {
    if (count == 5) {
      if (picAt == 1) {
        picAt = 2;
        $("#cover").fadeTo(1000, 0, function() {
          $("#cover").attr("style", "background-color: black; color: white; background-image: url(img/sportcover.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
          $("#cover").html("<h1>UTSD 2017</h1><p>UTAU Thailand Sport Days 2017<br />Now at Round 4!</p><p><a class=\"btn btn-primary btn-lg\" href=\"https://www.youtube.com/watch?v=8qGQ5v4X7jA\" role=\"button\"><span class=\"glyphicon glyphicon-play-circle\"></span> Watch UTSD</a></p>");
        }).fadeTo(1, 1);
      } else if (picAt == 2) {
        picAt = 3;
        $("#cover").fadeTo(1000, 0, function() {
          $("#cover").attr("style", "background-color: yellow; color: black; background-image: url(img/limitedcover.png); background-position: right; background-size: 100%; background-repeat: no-repeat;");
          $("#cover").html("<h1><h1><span class=\"glyphicon glyphicon-gift\"></span> Limited Time!!</h1><p>Special voice library to celebrate the new website.<br /><b>Available until 13th August 2017<b></p><p><a class=\"btn btn-primary btn-lg\" href=\"limited.html\" role=\"button\"><span class=\"glyphicon glyphicon-save\"></span> Download</a></p>");
        }).fadeTo(1, 1);
      } else {
        picAt = 1;
        $("#cover").fadeTo(1000, 0, function() {
          $("#cover").attr("style", "color: white; background-color: #2286D2; background-image: url(img/saga2covertrans.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
          $("#cover").html("<h1>PRINTmov Saga 2</h1><p>PRINTmov UTAU Saga 2 is coming.<br />Better quality with special system.</p><p><a class=\"btn btn-primary btn-lg\" href=\"saga2.html\" role=\"button\">Learn more</a></p>");
        }).fadeTo(1, 1);
      }
      count = 0;
    } else {
      count++;
    }
  }, 1000);

  setInterval(function() {
    if (picAt == 1) {
      $("#c1").attr("style", "color: black;");
      $("#c2").attr("style", "color: grey;");
      $("#c3").attr("style", "color: grey;");
    } else if (picAt == 2) {
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
    if (picAt != 1) {
      picAt = 1;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "color: white; background-color: #2286D2; background-image: url(img/saga2covertrans.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
        $("#cover").html("<h1>PRINTmov Saga 2</h1><p>PRINTmov UTAU Saga 2 is coming.<br />Better quality with special system.</p><p><a class=\"btn btn-primary btn-lg\" href=\"saga2.html\" role=\"button\">Learn more</a></p>");
      }).fadeTo(1, 1);
      count = 0;
    }
  });

  $("#c2").on("click", function() {
    if (picAt != 2) {
      picAt = 2;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "background-color: black; color: white; background-image: url(img/sportcover.png); background-position: right; background-size: 100%; background-repeat: repeat-y;");
        $("#cover").html("<h1>UTSD 2017</h1><p>UTAU Thailand Sport Days 2017<br />Now at Round 4!</p><p><a class=\"btn btn-primary btn-lg\" href=\"https://www.youtube.com/watch?v=8qGQ5v4X7jA\" role=\"button\"><span class=\"glyphicon glyphicon-play-circle\"></span> Watch UTSD</a></p>");
      }).fadeTo(1, 1);
      count = 0;
    }
  });

  $("#c3").on("click", function() {
    if (picAt != 3) {
      picAt = 3;
      $("#cover").fadeTo(1000, 0, function() {
        $("#cover").attr("style", "background-color: yellow; color: black; background-image: url(img/limitedcover.png); background-position: right; background-size: 100%; background-repeat: no-repeat;");
        $("#cover").html("<h1><span class=\"glyphicon glyphicon-gift\"></span> Limited Time!!</h1><p>Special voice library to celebrate the new website.<br /><b>Available until 13th August 2017<b></p><p><a class=\"btn btn-primary btn-lg\" href=\"limited.html\" role=\"button\"><span class=\"glyphicon glyphicon-save\"></span> Download</a></p>");
      }).fadeTo(1, 1);
      count = 0;
    }
  });

});
