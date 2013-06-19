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
                 xtype:'treepanel',
                 collapsible:true,
	             layout:'accordion',
	             layoutConfig:{
                    animate:true
                 },
                 root:new Ext.tree.TreeNode('SystemLeft'),
                 addNode:function(config){
                    this.appendChild(new Ext.tree.TreeNode(config));
                 }
                 /*items:[{
                 	title:Ext.bigFont('用户管理'),
                 	autoScroll:true,
                    border:false
                 },{
                    title:Ext.bigFont('权限管理'),
                    autoScroll:false,
                    border:false,
                    xtype:'treepanel',
                    //rootVisible:false,
                    root:new Ext.tree.TreeNode({
                        text:'good',
                        expanded:true,
                        children:[{
                           text:'角色管理',
                           leaf:true
                        },{
                           text:'资源管理',
                           leaf:true
                        }]
                    })
                 }]*/
        });
	}

});