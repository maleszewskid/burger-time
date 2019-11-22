$(document).ready(function() {
    $(".submit").on("submit", function(event) {
        console.log("clicked")
        event.preventDefault();
        var newBurger = $(this).children(".burger_id").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + newBurger
        }).then(function(data) {
            location.reload();
        });
    });
    $("#eat").on("click", function(event) {
        event.preventDefault();
        var burgerId = $(this).data("id")
        $.ajax("/burgers/" + burgerId, {
            type: "PUT",
            data: 1
        }).then(
            function() {
                location.reload()
            }
        )
    })
}); 
