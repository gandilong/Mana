Ext.ns("Thang.view");

Thang.view.System=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.System.superclass.constructor.call(this,{
            layout:'border',
    		listeners:{'activate':function(self){
                                    self.action();
    		                     }
    		          }//listener end
    	});
    },
    action:function(){
        //this.findById('systemLeft').getUpdater().refresh();
    	console.log('I Know, officer. I am System');
    },
    loadContent:function(config){
        this.findById('systemCenter').load(config);
    }


});