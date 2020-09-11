$("#subBtn").on("click", function (event) {
    event.preventDefault();
    console.log("This is working");

    var newBurger = {
        burgerName: $("#food").val().trim(),
        devoured: false
    };
    console.log(newBurger);
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("Added Burger to Eat");
            location.reload();
        }
    );
});

$("#devourBtn").on("click", function (event) {
    event.preventDefault();

})

$("#devourBtn").on("click", function (event) {
    var id = $(this).data("id");
    var devour = $(this).data("devour")
    devour = !devour;
    var newDevour = {
        devoured: devour
    }
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
    }).then(
        function () {
            console.log("changed devoured to", devour);
            location.reload();
        }
    );
});

