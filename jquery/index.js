$("h1").css("color", "red");

$("h1").click(function() {
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keydown(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
})

$("button").on("click", function() {
    $("h1").animate({ margin: "20px" })
})