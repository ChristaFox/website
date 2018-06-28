(function(){
    'use strict';
  
    class Component {
      constructor(settings) {
        this.stateErrorHint = settings.stateErrorHint || 'activeClassName is not a string';
      }
      
      printError(error) {
        
        return console.log(error);
      }    
      
      toggleActiveСlass(node, activeClassName) {
        
        if (typeof activeClassName !== 'string') return this.printError(this.stateErrorHint); 
        
        return  node.classList.toggle(activeClassName);
      }    
    }
    
    class Menu extends Component {
      constructor(settings) {
        super(settings);
        this.nodeMenu = settings.nodeMenu;
      }
      
      toggleActiveСlass(activeClassName) {      
        return super.toggleActiveСlass(this.nodeMenu, activeClassName);
      }
    }
  
    let nodeJSMenu = document.querySelector('body');
    
    let demoMenu = new Menu ({
      nodeMenu: nodeJSMenu
    });
    
    nodeJSMenu.querySelector('.js-menu__toggle').addEventListener('click', function() {
      demoMenu.toggleActiveСlass('js-menu_activated');
    });
  })();
function myFunction(x) {
    x.classList.toggle("change");
}