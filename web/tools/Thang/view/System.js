Ext.ns("Thang.view");

Thang.view.System=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.System.superclass.constructor.call(this,{
            layout:'border',
    		listeners:{'activate':function(self){
                                    self.action();//设置选中模块的监听
    		                     }
    		          }//listener end
    	});
    },
    action:function(){
        //选中模块后的行为
        //this.findById('systemCenter').load({url:'sys/dept',scripts:true});
    }

});