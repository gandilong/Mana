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
                 items:[{//用户管理
                 	title:Ext.bigFont('用户管理',false,14),
                 	autoScroll:true,
                    border:false,
                    xtype:'treepanel',
                    iconCls:'icon-group',
                    loader:new Ext.tree.TreeLoader({url:'sys/dept/tree'}),
                    root:new Ext.tree.AsyncTreeNode({
                        text:Ext.bigFont('部门'),
                        id:'root',
                        expanded:false
                    }),
                    listeners:{
                        'click':function(node,evnt){
                            if('root'==node.id){
                                //加载page/system/dept/list.jsp部门的列表页面
                                this.findParentByType('systempanel').findById('systemCenter').load({url:'sys/dept',scripts:true});
                            }else{
                                //加载page/system/user/list.jsp用户的列表页面 并传递一个dept_id
                                //this.findParentByType('systempanel').findById('systemCenter').load({url:'sys/user?dept_id='+node.id,scripts:true});
                                
                                var grid=new Thang.view.system.grid.UserGrid({params:{'dept_id':node.id}});
                                var systemCenter=this.findParentByType('systempanel').findById('systemCenter');
                                systemCenter.add(grid);
                                systemCenter.doLayout();
                            }
                            //centerView.activate('userList');
                        }
                    }
                 },{//权限管理
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
                    })
                 },{//资源管理
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