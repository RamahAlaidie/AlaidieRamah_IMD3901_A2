var carryObject =false;
AFRAME.registerComponent('carry_blocks', {
  init: function () 
  {
    console.log('listening for Carrying blocks');

    const Context_AF = this; 
      Context_AF.el.addEventListener('click', function(event){
          console.log('pick up object');
          //if we are already carrying a block, this will be ignored
          if(carryObject==false){  
          Context_AF.addChild();                                 //adds child to camera
          setTimeout(function(){ carryObject=true; }, 50);       //sets true so that we cant pick up more items
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

  },
  addChild: function(){
      let camera= document.querySelector(".camera");              //finds camera
      let child = this;                                           //selects this item   

      child.el.removeAttribute("dynamic-body");                   //removing dynamic-body attribute, which messes with pos & rot of object

      camera.object3D.localToWorld(child.el.object3D.position);   //sets child to the world space of the camera 
      camera.object3D.add(child.el.object3D);                     //adds object as a child of camera
      
      child.el.object3D.position.set(1, 1, -2 );                  //sets position relative to the camera
      child.el.object3D.rotation.set(0, 0, 0 );                   //sets rotation

      console.log(child.el.object3D.position);
          //adds event listener which removes item and resets carryobject so we can carry other items
          child.el.addEventListener('click', function(event){
            console.log('click');
            if(carryObject==true){
            carryObject=false;
            child.removeChild();
            }
          });
  },

  removeChild: function(){
    console.log("removing");
    let camera= document.querySelector(".camera");
    let position =  document.querySelector(".newPos").getAttribute('position');  //gets position of camera

    let child = this;
    child.el.parentNode.removeChild(child.el);                                    //removes child

    //re-creating blocks
    let blockElem = document.createElement('a-entity');

    blockElem.setAttribute('id','box')
    blockElem.setAttribute('class','clickable');
    blockElem.setAttribute('dynamic-body', {mass: '5'}, {linearDamping:'0.0001'})
    blockElem.setAttribute('geometry',{primitive:'box'}, {width:'0.75'}, {height:'0.75'}, {depth:'0.75'} );
    blockElem.setAttribute('material', 'color:#E6BC5C;');
    blockElem.setAttribute('carry_blocks','');
    
    blockElem.setAttribute('position', {x:position.x, y:position.y, z: position.z-2});  
    let scene= document.querySelector('a-scene');
    scene.appendChild(blockElem);
  }
});