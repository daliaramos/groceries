$(document).ready(function(){
  $("#form1").submit(function(event){

      var groceriesList = ["food1", "food2", "food3", "food4"];
      groceriesList.sort();

      var groceriesList = ["food1","food2","food3","food4"];

      groceriesList.forEach(function(groceriesList) {
      var userInput = $("input#" + groceriesList).val().toUpperCase();
      $("."+groceriesList).text(userInput).val()


    });

$('#form2').show();

event.preventDefault();

  });

});
