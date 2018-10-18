var counter=0,
    $bellNotificator = $('#header_bell_notificator'),
    $bellNotificatorImg = $bellNotificator.find('img');

$( "#kick_button" ).click(function() {
    counter++;
    $bellNotificator.attr('data-counter', counter);
    $bellNotificatorImg.removeClass("show_notif");
});