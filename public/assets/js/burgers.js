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
            function() {$(document).ready(function () {

  $(".submit").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#add").val(),
      devoured: 0
    }

    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function (data) {
   
      location.reload();
    });
  });


  $("#eat").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    var newState = {
      devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {

        location.reload()
      }
    )
  })
});
                location.reload()
            }
        )
    })
});
