var objsTouching = false;
AFRAME.registerComponent('create_homes', {
    init: function () 
    {
        console.log('creating homes');
        Context_AF = this;
              
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            //Context_AF.createHomes(); //calling create blocks function
        });

        Context_AF.el.addEventListener('mouseenter', function(event){
        Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.);
        });
    },

    createHomes: function(){
     console.log('hi');

    }

});