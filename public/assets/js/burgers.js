$(function() {

  
    $(".devour-burger").on("click", function(e){
        var id = $(this).data("id");
        var devStatus = $(this).data("devour")
    });


    $(".create-form").on("submit", function(event) {
   
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
})