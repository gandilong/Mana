Ext.ns("Thang.view");

Thang.view.Office=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.Office.superclass.constructor.call(this,{
            layout:'border',
    		listeners:{'activate':function(self){
                                    self.action();
    		                     }
    		          }//listener end
    	});
    },
    action:function(){
    	console.log('I Know, officer. I am Home');
    }

});