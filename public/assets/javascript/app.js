// alert("connect to JS");

$(function(){

    $(".change-burger").on("click", function (event){
        event.preventDefault();
       let id = $(this).data("id");
       let newDevoured = $(this).data("food");
        let newDevouredState = {
            devoured : newDevoured
        };
        console.log(newDevouredState);
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("change devoured to ", newDevoured);
                  // Reload the page to get the updated list
                location.reload();
            }
        )
    });

    //get all the data fro submit button and send POST request to server
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burgers-input").val().trim(),
            // devoured: $("[name=devoured]:checked").val().trim()

            
        };
        console.log(newBurger);

        // send the POST request
        $.ajax("/api/burgers",{
            type:"POST",
            data: newBurger
        }).then(
            function(){
                console.log("new burger is here!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});