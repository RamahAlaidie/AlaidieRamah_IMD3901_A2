var carryObject =false;
var dropObject =false;
AFRAME.registerComponent('carry_blocks', {
  init: function () 
  {
    console.log('listening for Carrying blocks');

    const Context_AF = this;
    
      Context_AF.el.addEventListener('click', function(event){
          console.log('click');
          if(carryObject==false){  
          carryObject=true;       //sets carry object as true so that we cant pick up momre items
          Context_AF.addChild();  //adds child to camera
          setTimeout(function(){ dropObject=true; }, 50);   //sets that it can drop to true after a delay so that it is not removed automatically
        }
        if(dropObject==true){
          carryObject=false;
          dropObject=false;
          Context_AF.removeChild();
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
      let child = this;
      //console.log(child);
      //child.el.object3D.position.set(child.el.object3D.position , '0 0 0' );

      camera.object3D.add(child.el.object3D);
      console.log(child.el.object3D.position);
      
  },

  removeChild: function(){
    console.log("removing");
    let camera= document.querySelector(".camera");
    let child = this;
    child.el.parentNode.removeChild(child.el);
  }
});