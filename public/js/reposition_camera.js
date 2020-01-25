AFRAME.registerComponent('reposition_camera', {
    init: function () 
    {
        const Context_AF = this;
        console.log("moving position");

        Context_AF.el.addEventListener('click', function(event){
            let camera= document.querySelector(".camera");
            let position =  Context_AF.el.object3D.position;  //gets position of this object
            
            console.log("moving position");
            camera.setAttribute('position',{x:position.x, y: 1.2 , z:position.z});

            console.log(camera);
        });  
    }
});