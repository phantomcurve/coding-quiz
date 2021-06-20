$(document).ready(function() {
  $("form#codingquiz").submit(function(event) {

    const dob = $("select#dob").val();
   
    if (dob === January || February || March) {
      $('#Ruby').show();
    
    } else if (dob === April || May || June) {
      $('#Python').show();

    } else if (dob === July || August || September) {
      $('#CSharp').show();

    } else (dob === October || November || December) 
      $('#Javascript').show();

      event.preventDefault();
  });
  jQuery(".btn").click(function() {
    alert("made you look!");
  });
});

