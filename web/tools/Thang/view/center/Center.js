Ext.ns('Thang.view.center');

//所有模块的中心区都用该类的实例 来加载页面。
Thang.view.center.Center=Ext.extend(Ext.Panel,{

	constructor:function(config){
         config=config||{};
         Ext.apply(this,config);
         Thang.view.center.Center.superclass.constructor.call(this,{
         	                             layout:'card',
                                         region:'center',
                                         height:450
                                       
         });         
	},
    reload:function(){
          this.getUpdater().refresh();
    },
    hasItem:function(xtype){
        return this.findByType(xtype).length>0
    },
    getItem:function(xtype){
        return this.findByType(xtype)[0];
    }
});