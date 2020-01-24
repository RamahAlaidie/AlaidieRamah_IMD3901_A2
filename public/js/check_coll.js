AFRAME.registerComponent('check_coll', {
    init: function () 
    {
        Context_AF = this;
         
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            //checkCollisions();
        });
        console.log('Listening for Collisions');

        let floorPlane = this;
        let checkojs = document.querySelectorAll("a-entity[id = 'box']");

        var canBuild = false;

        floorPlane.el.addEventListener('collide', function (e) {
           // console.log('object has collided with body' + e.detail.body.id);
            //console.log(e.detail.body.el.id);
           /*
            e.detail.target.el;  // Original entity (playerEl).
            e.detail.body.el;    // Other entity, which playerEl touched.
            e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
            e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).*/

            if (e.detail.body.el.id == 'box'){
              console.log('collided with a box');
              floorPlane.el.setAttribute('material', 'color:#E6BC5C;');
              console.log(floorPlane.el);
            }
            
            console.log(e);
          });


    },

    checkCollisions: function (){
        let floorPlane = document.getElementById('floorPlane1');
        let checkojs = document.querySelectorAll("a-entity[id = 'box']");

        //var canBuild = false;

        floorPlane.addEventListener('collide', function (e) {
            //console.log('object has collided with body #' + e.detail.body.id);
          /*
            e.detail.target.el;  // Original entity (playerEl).
            e.detail.body.el;    // Other entity, which playerEl touched.
            e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
            e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).*/

            if (e.detail.body.id == 'box'){
                console.log('whoa');

                //this.el.setAttribute('material', 'color:#E6BC5C;');
            }
          });

        

        console.log(checkojs.length);
        for (let i = 1; i< checkojs.length; i++){
            console.log((i) + ' Box(es) were detected');
        }
    }
});