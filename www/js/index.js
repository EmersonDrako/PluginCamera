
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        //document.addEventListener('deviceready', this.onDeviceReady, false);
    },


capturePhone:function(){
    navigator.camera.getPicture(onSuccess,onFail,{
        quality:50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum:true});
    function onSuccess(imageURI){
        var image= document.getElementById('minhaImagem');
        image.src= "data:image/jpeg;base64,"+imageURI;
        alert("1");
          $.ajax({ url: 'http://localhost:80/PluginCamera/www/controlador/imagen.php',
         data: {action: 'imagen',
          img:"'"+imageURI+"'"},
         type: 'POST',
  }).done(function(data) {
       alert("algo paso 2"+data); 

});
                alert("3");
        


    }
    function onFail(message){
        alert('FAILED BECAUSE'+message);
    }
}

/*

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
*/
};
