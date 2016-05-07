var myFirebaseRef = new Firebase("https://aulds-shopping-list-app.firebaseio.com/");

$(".new-list-button").click(function() {
    var fieldValue = $("#list-name-input").val();
    if (fieldValue.trim()) {
        save(fieldValue);
    }
});

$('#list-name-input').keypress(function(e) {
    var key = e.which;
    if(key == 13) {
        var fieldValue = $("#list-name-input").val();
        if (fieldValue.trim()) {
            save(fieldValue);
        }
    }
});

function save(value) {
    $(".collection").append("<li class='collection-item'>" + value + "</li>")
    myFirebaseRef.push(value);
    $("#list-name-input").val('');
}
function load() {
    myFirebaseRef.on("value", function(snapshot) {
        snapshot.forEach(function(item) {
            $(".collection").append("<li class='collection-item'>" + item.val() + "<button value='+ item.key() +'>Delete Item</button></li>")

        });
    });
};
load();

function deleteitem(id) {
    console.log(id);
}