
var musicPlaying=false;
AFRAME.registerComponent('play_music', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#music');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!

            if (musicPlaying==false){
                Context_AF.soundElem.components['sound'].playSound();
                musicPlaying=true;
            }

            if(musicPlaying==true){
            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            musicPlaying=false;
        }
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            //increase scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            //decrease scale
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    }
});