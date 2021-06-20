$(document).ready(function() {
  $("form#codingQuiz").submit(function(event) {
    const inputtedName = $("input#inputtedName").val();
    const dob = $("select#dob").val();
    const favColor = $("input:radio[name=favColor]:checked").val()

    $("#output").text(inputtedName);
   
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
});



