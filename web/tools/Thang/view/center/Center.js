Ext.ns('Thang.view.center');

//所有模块的中心区都用该类的实例 来加载页面。
Thang.view.center.Center=Ext.extend(Ext.Panel,{

	constructor:function(config){
         config=config||{};
         Ext.apply(this,config);
         Thang.view.center.Center.superclass.constructor.call(this,{
         	                             layout:'fit',
                                         region:'center',
                                         tbar:[{
                                                    text:Ext.bigFont('刷新',true),
                                                    iconCls:'icon-arrow_refresh',
                                                    handler:function(btn,evnt){
                                                    	btn.findParentByType('centerpanel').getUpdater().refresh();
                                                    }
                                             }]//tbar end
         });         
	}
});