Ext.ns('Thang.view.center');

Thang.view.center.SystemCenter=Ext.extend(Ext.Panel,{

    constructor:function(config){
         config=config||{};
         Ext.apply(this,config);
         Thang.view.center.SystemCenter.superclass.constructor.call(this,{
         	 autoLoad:false,
             tbar:[{
             	text:'refresh',
             	iconCls:'icon-arrow_refresh_small'
             }]	
         });         
    }

});