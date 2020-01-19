/*AFRAME.registerComponent('create_blocks', {
    init: function () 
    {
      console.log('init component');

      const Context_AF = this;
      
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.createBlocks(); //calling create blocks function
        });

        Context_AF.el.addEventListener('mouseenter', function(event){
        Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.);
        });
    },
    createBlocks: function(){
        const Context_AF = this;

        //creating blocks
        let blockElem = document.createElement('a-entity');
        blockElem.setAttribute('class','carry');
        blockElem.setAttribute('geometry',{primitive:'box'});
        blockElem.setAttribute('material', 'color:#b2b2ff;');
        //cowElem.setAttribute('delete-cow-element','');

        
        /*
        cowElem.setAttribute('position', {x:(Math.random()*6.0)- 3.0, y: 0, z: -4.0-(Math.random()*3.0)});
        const randScale =0.2+ (Math.random()*0.8);
        cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        cowElem.setAttribute('rotation', {x:0, y:Math.random()*360.0, z:0});*/
       
        //find scene and add cow to scene?*/
        /*
        let scene= document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
  });*/