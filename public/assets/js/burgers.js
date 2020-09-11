$(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
        burgerName: $("#food").val().trim(),
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