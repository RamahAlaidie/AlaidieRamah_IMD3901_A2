var carryObject =false;
AFRAME.registerComponent('carry_blocks', {
  init: function () 
  {
    console.log('listening for Carrying blocks');

    const Context_AF = this;
    
      Context_AF.el.addEventListener('click', function(event){
          console.log('click');
          if(carryObject==false){  
          Context_AF.addChild();  //adds child to camera
          setTimeout(function(){ carryObject=true; }, 50);       //sets carry object as true so that we cant pick up more items
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
      let camera= document.querySelector(".camera");    //finds camera
      let child = this;                                 //selects this item
      //child.el.object3D.position.set(child.el.object3D.position , '0 0 0' );

      camera.object3D.add(child.el.object3D);           //adds object as a child of camera
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
    let child = this;
    child.el.parentNode.removeChild(child.el);   //removes child

    var position =  document.querySelector(".camera").getAttribute('position');  //gets position of camera
    
    //re-creating blocks
    let blockElem = document.createElement('a-entity');
    blockElem.setAttribute('id','box')
    blockElem.setAttribute('class','clickable');
    blockElem.setAttribute('dynamic-body', {mass: '5'}, {linearDamping:'0.0001'})
    blockElem.setAttribute('geometry',{primitive:'box'}, {width:'0.75'}, {height:'0.75'}, {depth:'0.75'} );
    blockElem.setAttribute('material', 'color:#E6BC5C;');
    blockElem.setAttribute('carry_blocks','');
    blockElem.setAttribute('position', {x:position.x, y:position.y, z: position.z});  
    let scene= document.querySelector('a-scene');
    scene.appendChild(blockElem);
  }
});