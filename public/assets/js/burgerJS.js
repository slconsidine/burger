$(function() {
    $(".change-devour").on("click", function (event) {
		console.log("devour button clicked");
	    var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        
        var newDevouredState = {
            devoured: newDevoured
		};

		console.log("newDevouredState: " + newDevouredState);

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newDevouredState
		}).then(function () {
            console.log("changed devoured to", newDevoured);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
        console.log("submit button clicked")
		event.preventDefault();
		var newBurger = {
			burger_name: $("#new-order").val().trim(),
			devoured: false
        };
        console.log("New burger object is " + newBurger.burger_name + " and " + newBurger.devoured);
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function () {
            console.log("new burger posted")
			location.reload();
		});
    });
});
