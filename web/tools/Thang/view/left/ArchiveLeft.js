Ext.ns('Thang.view.left');

Thang.view.left.ArchiveLeft=Ext.extend(Ext.Panel,{

	constructor:function(config){
        config=config||{};
        Ext.apply(this,config);
        Thang.view.left.ArchiveLeft.superclass.constructor.call(this,{
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
                 	title:Ext.bigFont('档案'),
                 	autoScroll:true,
                    iconCls:'icon-folder_table',
                    border:false
                 }]
        });
	}

});