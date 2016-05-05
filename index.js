var newListCreate = function() {
    var newList = $("#list-name-input").val();
    $(".collection").append("<li class='collection-item'>" + newList + "</li>")
    $("#list-name-input").val('');
};

$(".new-list-button").click(function() {
    if($("#list-name-input").val().trim()) {
        newListCreate();
    }
});

$('#list-name-input').keypress(function(e) {
    var key = e.which;
    if(key == 13) {
        if($("#list-name-input").val().trim()) {
            newListCreate();
        }
    }
});

function save() {
    var fieldValue = document.getElementById('#list-name-input').value;
    localStorage.setItem('text', fieldValue);
}
function load() {
    var storedValue = localStorage.getItem('text');
    if(storedValue){
        document.getElementById('#list-name-input').value = storedValue;
    }
}