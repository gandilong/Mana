Ext.ns("Thang.view");

Thang.view.Office=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
    	Thang.view.Office.superclass.constructor.call(this);
    }

});