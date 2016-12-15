setInterval(function () {
    jQuery('#comments-list').load(location.href + ' #comments-list');
}, 20000);
