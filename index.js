var myFirebaseRef = new Firebase("https://aulds-shopping-list-app.firebaseio.com/");

$(".new-list-button").click(function () {
    var fieldValue = $("#list-name-input").val();
    if (fieldValue.trim()) {
        save(fieldValue);
    }
});

$('#list-name-input').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
        var fieldValue = $("#list-name-input").val();
        if (fieldValue.trim()) {
            save(fieldValue);
        }
    }
});

$('body').delegate('.deleteButton', 'click', function () {
    var parent = $(this).parent();
    console.log(parent);
    var ref = new Firebase('https://aulds-shopping-list-app.firebaseio.com/' + $(this).attr('value'));
    ref.remove(function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            parent.remove();
        }
    });
});



function save(value) {
    $(".collection").append("<li class='collection-item'>" + value + "</li>")
    myFirebaseRef.push(value).then(function(item){
        console.log(item);
    });
    $("#list-name-input").val('');
};

function load() {
    myFirebaseRef.once("value", function (snapshot) {
        snapshot.forEach(function (item) {
            $(".collection").append("<li class='collection-item'>" + item.val() + "<button class='deleteButton' value='" + item.key() + "'>Delete Item</button></li>");
        });
    });
};

load();