// Back end
var wordPlay = function(oldArray) {
  var newArray = [];
  oldArray.forEach(function(word) {
    if (word.length >= 3) {
      newArray.push(word);
    };
  });
  return newArray.reverse().join(" ");
};
// Front end
$(document).ready(function() {
  $("form#sentence").submit(function(e) {
    var origSent = $("#words").val().split(" ");
    console.log(origSent);
    $("#show-sent").prepend(wordPlay(origSent));


    e.preventDefault();
  });
});
