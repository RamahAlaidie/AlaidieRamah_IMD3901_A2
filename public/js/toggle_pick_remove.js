var removeobj=false;
AFRAME.registerComponent('toggle_pick_remove', {
    init: function () 
    {
      console.log('listening for toggle');

      const Context_AF = this;
      
        Context_AF.el.addEventListener('click', function(event){   
            if (removeobj==false){
                Context_AF.removePick();     
                console.log('calling Remove');
                setTimeout(function(){ removeobj=true; }, 50);
            }

            if(removeobj==true){
                Context_AF.addPick();
                setTimeout(function(){ removeobj=false; }, 50);
            }

            });

        Context_AF.el.addEventListener('mouseenter', function(event){
        Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.);
        });
    },

    //this function will stop players from picking up objects
    removePick: function(){
        let boxobj = document.querySelectorAll("a-entity[id = 'box']");
        let torusobj = document.querySelectorAll("a-entity[id = 'torus']");

        //console.log(boxobj);
        //console.log(torusobj);
            for (var i = 0; i< boxobj.length; i++){
                console.log(boxobj[i].getAttribute('PickUp'));
    
                boxobj[i].setAttribute('PickUp','false');
                console.log(boxobj[i].getAttribute('PickUp'));
                
            }

            for (var i = 0; i< torusobj.length; i++){
                console.log(torusobj[i].getAttribute('PickUp'));
    
                torusobj[i].setAttribute('PickUp','false');
                console.log(torusobj[i].getAttribute('PickUp'));
                
            }

         
    },

    //this will allow players to pickup
    addPick: function(){
        let boxobj = document.querySelectorAll("a-entity[id = 'box']");
        let torusobj = document.querySelectorAll("a-entity[id = 'torus']");

        //console.log(boxobj);
        //console.log(torusobj);
            for (var i = 0; i< boxobj.length; i++){
                console.log(boxobj[i].getAttribute('PickUp'));
    
                boxobj[i].setAttribute('PickUp','true');
                console.log(boxobj[i].getAttribute('PickUp'));
                
            }

            for (var i = 0; i< torusobj.length; i++){
                console.log(torusobj[i].getAttribute('PickUp'));
    
                torusobj[i].setAttribute('PickUp','true');
                console.log(torusobj[i].getAttribute('PickUp'));
                
            }
    }
  });