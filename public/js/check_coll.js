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
              objc.createHomes();
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
                  objc.createHomes();
                }
                
               // console.log(e);
              });
            }
    },

    createHomes: function(){
        let checkojs = document.querySelectorAll("a-entity[id = 'floorPlane']");
        let checkroof = document.querySelectorAll("a-entity[id = 'roof']");
        var countSquares=0
        var countRoof=0

        for (let i = 0; i< checkojs.length; i++){
            color = checkojs[i].getAttribute('material');
            console.log(color.color);
    
            if (color.color=="#44E746"){
                console.log("true");
            }
            else if (color.color !="#44E746"){
                console.log("false");
            }
           //console.log(checkojs[i].material);
        }

    }
});