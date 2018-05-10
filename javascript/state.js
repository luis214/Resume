
$(document).ready(function(){

  $('#about').click(function(){
      document.getElementById("wrapper").style.display = "block";
      document.getElementById("wrapper3").style.display = "none";
      document.getElementById("si").style.display = "none";
      document.getElementById("cb").style.display = "none";
      document.getElementById("wrapper4").style.display = "none";
      document.getElementById("cpp").style.display = "none";
      $(".nav").find(".active").removeClass("active");
      $("#about").addClass("active");
  });
  $('#carbon').click(function(){
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("wrapper3").style.display = "none";
      document.getElementById("si").style.display = "none";
      document.getElementById("cb").style.display = "block";
      document.getElementById("wrapper4").style.display = "none";
      document.getElementById("cpp").style.display = "none";
      $(".nav").find(".active").removeClass("active");
      $("#project").addClass("active");
  });
  $('#sus').click(function(){
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("wrapper3").style.display = "none";
      document.getElementById("cb").style.display = "none";
      document.getElementById("si").style.display = "block";
      document.getElementById("wrapper4").style.display = "none";
      document.getElementById("cpp").style.display = "none";
      $(".nav").find(".active").removeClass("active");
      $("#project").addClass("active");
  });
  $('#experience').click(function(){
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("si").style.display = "none";
      document.getElementById("cb").style.display = "none";
      document.getElementById("wrapper3").style.display = "block";
      document.getElementById("wrapper4").style.display = "none";
      document.getElementById("cpp").style.display = "none";
      $(".nav").find(".active").removeClass("active");
	   document.getElementById("res").style.display = "block";
      $("#experience").addClass("active");
  });
  $('#contact').click(function(){
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("si").style.display = "none";
      document.getElementById("cb").style.display = "none";
      document.getElementById("wrapper3").style.display = "none";
      document.getElementById("wrapper4").style.display = "block";
      document.getElementById("cpp").style.display = "none";
      $(".nav").find(".active").removeClass("active");
      $("#contact").addClass("active");
  });
  $('#cc').click(function(){
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("si").style.display = "none";
      document.getElementById("cb").style.display = "none";
      document.getElementById("wrapper3").style.display = "none";
      document.getElementById("wrapper4").style.display = "none";
      document.getElementById("cpp").style.display = "block";
      $(".nav").find(".active").removeClass("active");
      $("#project").addClass("active");
  });

});
