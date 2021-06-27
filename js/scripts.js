// Business Logic





// UI Logic

$(document).ready(function() {
  $(".Ruby").hide();
  $(".Python").hide();
  $(".CSharp").hide();
  $(".Javascript").hide();
  $("form#codingQuiz").submit(function(event) {
    event.preventDefault();
    
    const months = $("#months").val();
    
      if (months === 'January' || months === 'February' || months === 'March' ) {
      $(".Ruby").show();
  
    } else if (months === 'April' || months === 'May' || months === 'June') {
      $(".Python").show();

    } else if (months === 'July' || months === 'August' || months === 'September') {
      $(".CSharp").show();

    } else if (months === 'October' || months === 'November' || months === 'December') {
      $(".Javascript").show();
    }}); 
  });
