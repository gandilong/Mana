Ext.ns("Thang.view");

Thang.view.Archive=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.Archive.superclass.constructor.call(this);
    }

});