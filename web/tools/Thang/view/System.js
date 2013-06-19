Ext.ns("Thang.view");

Thang.view.System=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.System.superclass.constructor.call(this);
    }

});