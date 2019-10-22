// Back end

// Front end
$(document).ready(function() {
  $("form#sentence").submit(function(e) {
    var set1 = [];
    var origSent = $("#words").val().split(" ");
    console.log(origSent);
    // $("#show-sent").show();

    e.preventDefault();
  });
});
