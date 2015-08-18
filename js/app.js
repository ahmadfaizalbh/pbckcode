window.addEventListener('load', function () {
    FastClick.attach(document.body);
}, false);

var observer = new FontFaceObserver('Mir-Medium', {
    weight : 400
});

observer.check()
    .then(function () {
        document.getElementsByTagName('body')[0].className += ' font-mir-medium-loaded';
    }, function () {
        console.error('Mir Medium is not available');
    });