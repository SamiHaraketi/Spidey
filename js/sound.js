    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('../', 'spidey.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('#Découvrir').click(function() {
            audioElement.play();
        });


});  