AFRAME.registerComponent('create_blocks', {
    init: function () 
    {
      console.log('listening for creating blocks');

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
        for (let i=0; i<6; i++){
        var position = {x:(10.0 - Math.random()*3.0), y:(2 + Math.random()*1.25), z: -7.0-(Math.random()*3.0)};
        let blockElem = document.createElement('a-entity');
        blockElem.setAttribute('id','box')
        blockElem.setAttribute('class','clickable');
        blockElem.setAttribute('dynamic-body', {mass: '15'}, {linearDamping:'0.0001'});

        blockElem.setAttribute('geometry',{primitive:'box'}, {width:'0.75'}, {height:'0.75'}, {depth:'0.75'} );
        blockElem.setAttribute('material', 'color:#E6BC5C;');
        blockElem.setAttribute('carry_blocks','');

        blockElem.setAttribute('position', position);
        blockElem.setAttribute('PickUp', "true");
        blockElem.setAttribute('rotation', {x:0, y:Math.random()*360.0, z:0});
        
        let scene= document.querySelector('a-scene');
        scene.appendChild(blockElem);}

        //creating torus
        var position = {x:(10.0 - Math.random()*3.0), y:(2 + Math.random()*1.25), z: -7.0-(Math.random()*3.0)};
        let torElem = document.createElement('a-entity');
        torElem.setAttribute('id','torus')
        torElem.setAttribute('class','clickable');
        torElem.setAttribute('dynamic-body',{shape:'hull'}, {mass: '15'}, {linearDamping:'0.0001'});

        torElem.setAttribute('geometry',{primitive:'tetrahedron'},{radius: '2'});
        torElem.setAttribute('material', 'color:#E6BC5C;');
        torElem.setAttribute('carry_blocks','');
        torElem.setAttribute('PickUp', "true");

        torElem.setAttribute('position', position);
        torElem.setAttribute('rotation', {x:0, y:Math.random()*360.0, z:0});
        
        console.log(torElem)
        let scene= document.querySelector('a-scene');
        scene.appendChild(torElem);

    }
  });