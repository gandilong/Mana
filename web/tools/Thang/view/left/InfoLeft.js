Ext.ns('Thang.view.left');

Thang.view.left.InfoLeft=Ext.extend(Ext.Panel,{

	constructor:function(config){
        config=config||{};
        Ext.apply(this,config);
        Thang.view.left.InfoLeft.superclass.constructor.call(this,{
                 region:'west',
                 width: 200,
	             split:true,
                 minSize:175,
                 maxSize:300,
                 collapsible: true,
	             layout:'accordion',
	             layoutConfig:{
                       animate:true
                 },
                 items:[{
                 	title:Ext.bigFont('信息发布平台'),
                 	autoScroll:true,
                    iconCls:'icon-feed',
                    border:false
                 }]
        });
	}

});