AFRAME.registerComponent('check_coll', {
    init: function () 
    {
        Context_AF = this;
              
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            let checkojs = document.querySelectorAll("a-entity[id = 'box']");

            console.log(checkojs.length);
            for (let i = 0; i< checkojs.length; i++){
                console.log('Box ' + (i+1) + 'was detected');
            }
        });
        console.log('Listening for Collisions');


    }
});