Ext.ns('Thang.view.left');

Thang.view.left.SystemLeft=Ext.extend(Ext.Panel,{

	constructor:function(config){
        config=config||{};
        Ext.apply(this,config);
        Thang.view.left.SystemLeft.superclass.constructor.call(this,{
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
                 	title:Ext.bigFont('用户管理'),
                 	autoScroll:true,
                    border:false
                 },{
                    title:Ext.bigFont('角色管理'),
                    autoScroll:true,
                    border:false
                 },{
                    title:Ext.bigFont('资源管理'),
                    autoScroll:true,
                    border:false
                 }]
        });
	}

});