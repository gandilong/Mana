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
                 collapsible:true,
	             layout:'accordion',
	             layoutConfig:{
                    animate:true
                 },
                 items:[{
                 	title:Ext.bigFont('用户管理',false,14),
                 	autoScroll:true,
                    border:false,
                    xtype:'treepanel',
                    iconCls:'icon-group',
                    loader:new Ext.tree.TreeLoader(),
                    root:new Ext.tree.AsyncTreeNode({
                        text:'部门',
                        id:'root',
                        expanded:true,
                        children:[{text:'aaa',leaf:true},{text:'bbb',leaf:true}]
                    })
                 },{
                    title:Ext.bigFont('权限管理',false,14),
                    autoScroll:false,
                    border:false,
                    xtype:'treepanel',
                    rootVisible:false,
                    iconCls:'icon-award_star_gold_2',
                    root:new Ext.tree.AsyncTreeNode({
                        text:'good',
                        expanded:true,
                        children:[{
                           text:Ext.bigFont('角色管理'),
                           iconCls:'icon-user_suit',
                           leaf:true
                        },{
                           text:Ext.bigFont('资源管理'),
                           iconCls:'icon-plugin',
                           leaf:true
                        }]
                    })//权限管理 end
                 },{
                    title:Ext.bigFont('资源管理',false,14),
                    autoScroll:true,
                    border:false,
                    iconCls:'icon-plugin',
                    xtype:'treepanel',
                    root:new Ext.tree.AsyncTreeNode({
                        text:Ext.bigFont('系统'),
                        expanded:false,
                        children:[{
                            text:Ext.bigFont('首页')
                        },{
                           text:Ext.bigFont('办公管理') 
                        }]
                    })
                 }]//items end
        });
	}

});