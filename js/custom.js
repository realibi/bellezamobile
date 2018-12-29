$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8954014914',
        limit: 24,
        resolution: 'standard_resolution',
        accessToken: '8954014914.1677ed0.8ce07e0eeb9b4d13929ed608f46e65f5',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});