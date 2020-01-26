$(document).ready(function () {

  $(".submit").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#add").val(),
      eaten: 0
    }
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
      eaten: 1
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
