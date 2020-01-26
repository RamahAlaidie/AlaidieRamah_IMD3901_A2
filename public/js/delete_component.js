AFRAME.registerComponent('delete_component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let scene= document.querySelector('a-scene');
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
    }
});