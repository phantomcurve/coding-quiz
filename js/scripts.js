// Business Logic





// UI Logic

$(document).ready(function() {
  $(".Ruby").hide();
  $(".Python").hide();
  $(".CSharp").hide();
  $(".Javascript").hide();
  $("form#codingQuiz").submit(function(event) {
    event.preventDefault();

    const inputtedName = $("#inputtedName").val(inputtedName);
    const birthMonth = $("#months").val(birthMonth);

    $("#inputtedName").text();

    if (chosenMonth === "January" || chosenMonth === "February" || chosenMonth === "March" ) {
      $(".Ruby").show();
  
    } else if (chosenMonth === 3 || chosenMonth === 4 || chosenMonth === 5) {
      $(".Python").show();

    } else if (chosenMonth === 6 || chosenMonth === 7 || chosenMonth === 8) {
      $(".CSharp").show();

    } else if (chosenMonth === 9 || chosenMonth === 10 || chosenMonth === 11) 
      $(".Javascript").show();
  });
});



