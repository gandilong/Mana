Ext.ns('Thang.view.left');

Thang.view.left.OfficeLeft=Ext.extend(Ext.Panel,{

	constructor:function(config){
        config=config||{};
        Ext.apply(this,config);
        Thang.view.left.OfficeLeft.superclass.constructor.call(this,{
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
                 	title:Ext.bigFont('收文管理'),
                 	autoScroll:true,
                    iconCls:'icon-folder_go',
                    border:false
                 },{
                    title:Ext.bigFont('发文管理'),
                    autoScroll:true,
                    iconCls:'icon-folder_up',
                    border:false

                 }]
        });
	}

});