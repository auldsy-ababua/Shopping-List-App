var newItemCreate = function() {
    var newListItem = $("#list-item-input").val();
    $(".collection").append("<li class='collection-item'>" + newListItem + "</li>")
    $("#list-item-input").val('');
};

$(".new-item-button").click(function() {
    newItemCreate();
});

$('#list-item-input').keypress(function(e) {
    var key = e.which;
    if(key == 13) {
        newItemCreate();
    }
});
