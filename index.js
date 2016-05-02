$(".new-list").click(function() {
    var newList = $("#list-name-input").val();
    $(".collection").append("<li>" + newList + "</li>")
});