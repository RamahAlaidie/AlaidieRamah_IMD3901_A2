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
                
               // console.log(e);
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

      for (let i = 0; i< checkojs.length; i++){

        //delete allobjs[i];
        checkojs[i].removeAttribute("dynamic-body");                   //removing dynamic-body attribute, which messes with pos & rot of object
        checkojs[i].setAttribute('delete_component','');
       }

        if ((checkojs[0].getAttribute('material').color=="#44E746") && (checkojs[1].getAttribute('material').color=="#44E746") && (checkojs[2].getAttribute('material').color=="#44E746") &&(checkojs[3].getAttribute('material').color=="#44E746") && (checkojs[4].getAttribute('material').color=="#44E746") && (checkojs[5].getAttribute('material').color=="#44E746")&& (checkroof[0].getAttribute('material').color=="#44E746")){
          console.log("all objects are green");

          for (let i = 8; i< allobjs.length; i++){

           //delete allobjs[i];
           scene.remove(allojs[i]);
           scene.removeChild(allobjs[i]);
          }
/*
          setTimeout(function(){ 
                    //delete planes     
                    for (let i = 0; i< checkojs.length; i++){

                      scene.remove(checkojs[i]);
                    }
                    for (let i = 0; i< checkroof.length; i++){
          
                      scene.remove(checkroof[i]);
                    }
                    
                    //delete boxes
                    for (let i = 0; i< boxobj.length; i++){
          
                      scene.remove(boxobj[i]);
                    }
          
                    //delete triangle
                    for (let i = 0; i< torusobj.length; i++){
          
                      scene.remove(torusobj[i]);
                    } 
                    
                    j= (Math.random()* 11);

                    console.log(j);
          
          }, 1000)*/

        }

        else{
          console.log("Not yet");
        }
    },

    /*
  createHomes: function(){
    j= (Math.random()* 11);

    console.log(j);

   // for (i=0; i< )
  }*/

});