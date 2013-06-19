Ext.ns("Thang.view");

Thang.view.Home=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.Home.superclass.constructor.call(this,{
    		listeners:{'activate':function(self){
                                    self.action();
    		                     }
    		          }//listener end
    	});
    },
    action:function(){
    	console.log('I Know, officer');
    }

});