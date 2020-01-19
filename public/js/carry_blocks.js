AFRAME.registerComponent('carry_blocks', {
  init: function () 
  {
    console.log('listening for Carrying blocks');

    const Context_AF = this;
    
      Context_AF.el.addEventListener('click', function(event){
          console.log('click');
          Context_AF.addChild();
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
      let scene= document.querySelector("a-scene");
      let camera= document.querySelector(".camera");
      let child = new THREE.Object3D();
      child = this;

      console.log('selected camera');
      camera.add(child);
      var position =camera.object3D.getWorlPosition();
      child.setAttribute('position', position);
  }
});