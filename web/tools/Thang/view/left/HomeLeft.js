Ext.ns('Thang.view.left');

Thang.view.left.HomeLeft=Ext.extend(Ext.Panel,{

	constructor:function(config){
        config=config||{};
        Ext.apply(this,config);
        Thang.view.left.HomeLeft.superclass.constructor.call(this,{
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
                 	title:Ext.bigFont('前台预览'),
                 	autoScroll:true,
                    iconCls:'icon-film',
                    border:false
                 }]
        });
	}

});