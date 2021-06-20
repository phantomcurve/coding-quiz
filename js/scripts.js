$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    $("#output").text(name);
  });
  $("form#dob").submit(function(event) {
    event.preventDefault();
    const dob = $("#dob").val();

    if (dob === January || February || March) {
      $('#Ruby').show();
    
    } else if (dob === April || May || June) {
      $('#Python').show();

    } else if (dob === July || August || September) {
      $('#C#').show();

    } else (dob === October || November || December) {
      $('Javascript').show();
    }
    
  });
  
  $("form#favColor").submit(function(event) {
    event.preventDefault();
    const favColor = $("#favColor").val();
  });
});