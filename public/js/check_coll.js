
AFRAME.registerComponent('check_coll', {
    init: function () 
    {
        console.log('Listening for Collisions');

        let objc = this;

        var canBuild = false;

        //console.log(objc);
       if (objc.el.id == "floorPlane"){
        objc.el.addEventListener('collide', function (e) {
            if (e.detail.body.el.id == 'box'){
              console.log('collided with a box');
              objc.el.setAttribute('material', 'color:#44E746;');
              //console.log(objc.el);
              objc.removeObjects();
            }
            
            //console.log(e);
          });
        }

        if (objc.el.id == "roof"){
            objc.el.addEventListener('collide', function (e) {
                if (e.detail.body.el.id == 'torus'){
                  console.log('collided with a torus');
                  objc.el.setAttribute('material', 'color:#44E746;');
                  console.log(objc.el);
                  objc.removeObjects();
                }

              });
            }
    },

    removeObjects: function(){
        let checkojs = document.querySelectorAll("a-entity[id = 'floorPlane']");
        let checkroof = document.querySelectorAll("a-entity[id = 'roof']");
        let boxobj = document.querySelectorAll("a-entity[id = 'box']");
        let torusobj = document.querySelectorAll("a-entity[id = 'torus']");
        let scene= document.querySelector('a-scene');
        let allobjs= document.querySelectorAll("a-entity");
        console.log(allobjs);



        if ((checkojs[0].getAttribute('material').color=="#44E746") && (checkojs[1].getAttribute('material').color=="#44E746") && (checkojs[2].getAttribute('material').color=="#44E746") &&(checkojs[3].getAttribute('material').color=="#44E746") && (checkojs[4].getAttribute('material').color=="#44E746") && (checkojs[5].getAttribute('material').color=="#44E746")&& (checkroof[0].getAttribute('material').color=="#44E746")){
          console.log("all objects are green");
          
          setTimeout(function(){ 
           
            for (let i = 10; i< allobjs.length; i++){
              allobjs[i].setAttribute('PickUp','false');
              scene.remove(allobjs[i]);
             }

             /*            for (var i=0; i<3; i++){
              let houseElem= document.createElement('a-entity');
              houseElem.setAttribute('obj-model', {obj:'assets/models/house.obj',mlt:'assets/textures/house.mtl'});
              houseElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:0, z:-4.0 - (Math.random() * 3.0)});
      
              const randScale = 0.2 + (Math.random() * 0.8);
              houseElem.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
              houseElem.setAttribute('rotation', {x:0.0, y:Math.random() * 360.0, z:0.0});
              
              let scene = document.querySelector('a-scene');
              scene.appendChild(houseElem);
            } */

          
          }, 1000)

      }

    }
});