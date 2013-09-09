Ext.ns("Thang.view");

Thang.view.Info=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.Info.superclass.constructor.call(this,{
            layout:'border',
    		listeners:{'activate':function(self){
                                    self.action();
    		                     }
    		          }//listener end
    	});
    },
    action:function(){
    	console.log('I Know, officer. I am Info');
    }

});