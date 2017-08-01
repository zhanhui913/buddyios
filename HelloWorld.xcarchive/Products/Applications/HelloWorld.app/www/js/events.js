(function(window){

    $('#cameraBtn').click(function(){

        var camerOptions = {
            quality: 90,
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 350
        };

        navigator.camera.getPicture(function(imageURI){

            var image = $('#photo');
            image.attr('src', imageURI);
            $('#share-container').show();

        }, function(errorMessage){
            alert('The following error occured: ' + errorMessage)
        }, camerOptions);

    });

    $('#torchBtn').click(function(){
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {

                // switch on
                window.plugins.flashlight.switchOn(
                    function() {
                        $('#torchBtn').text('Turn Off flashlight');
                    }, // optional success callback
                    function() {
                        $('#torchBtn').text('Turn On flashlight');
                    }, // optional error callback
                    {intensity: 0.3} // optional as well
                );

                // switch off after 3 seconds
                setTimeout(function() {
                    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                    $('#torchBtn').text('Turn On flashlight');
                }, 3000);

            } else {
                alert("Flashlight not available on this device");
            }
        });
    });
/*
    $('#numberBtn').click(function(){
        var numberField = $('#numberField').innerText;
        console.log(numberField);
        $('#addedNumber').text(numberField);
    });*/
})(window);