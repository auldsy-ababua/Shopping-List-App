var newListCreate = function() {
    var newList = $("#list-name-input").val();
    $(".collection").append("<li class='collection-item'>" + newList + "</li>")
    $("#list-name-input").val('');
};

$(".new-list").click(function() {
    newListCreate();
});

$('#list-name-input').keypress(function(e) {
    var key = e.which;
    if(key == 13) {
        newListCreate();
    }
});

