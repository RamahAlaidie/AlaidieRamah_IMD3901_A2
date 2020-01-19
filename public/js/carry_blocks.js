var carryObject =false;
AFRAME.registerComponent('carry_blocks', {
  init: function () 
  {
    console.log('listening for Carrying blocks');

    const Context_AF = this;
    
      Context_AF.el.addEventListener('click', function(event){
          console.log('click');
          if(carryObject==false){
          carryObject=true;
          console.log(carryObject);
          Context_AF.addChild();
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
      let camera= document.querySelector(".camera");
      //let child = new THREE.Object3D(this);
      let child = this;
      camera.object3D.add(child.el.object3D);
/*
      var position = new THREE.Vector3();
      position.getPositionFromMatrix(camera.el.matrixWorld);
      console.log(position.x + ',' + position.y + ',' + position.z)
      //child.setAttribute('position', position);*/
  }
});