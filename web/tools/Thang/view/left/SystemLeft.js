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
                            var centerPanel=this.findParentByType('systempanel').findByType('centerpanel')[0];
                            if('root'==node.id){
                                if(!centerPanel.hasItem('deptgrid')){
                                    centerPanel.add(new Thang.view.system.grid.DeptGrid({id:'deptGrid'}));
                                    centerPanel.doLayout();
                                    centerPanel.layout.setActiveItem('deptGrid');
                                }else{
                                    centerPanel.layout.setActiveItem('deptGrid');
                                    centerPanel.getItem('deptgrid').getStore().reload();
                                }
                                
                            }else{
                                if(centerPanel.hasItem('usergrid')){
                                     centerPanel.layout.setActiveItem('userGrid');
                                     centerPanel.getItem('usergrid').setBaseParam('dept_id',node.id);
                                     var store=centerPanel.getItem('usergrid').getStore();
                                     store.removeAll();
                                     store.reload();
                                }else{
                                     centerPanel.add(new Thang.view.system.grid.UserGrid({id:'userGrid',params:{'dept_id':node.id}}));
                                     centerPanel.doLayout();
                                     centerPanel.layout.setActiveItem('userGrid');
                                     centerPanel.getItem('usergrid').getStore().load();
                                }
                                
                            }
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
                        expanded:true,
                        children:[{
                           id:'role',
                           text:Ext.bigFont('角色管理'),
                           iconCls:'icon-user_suit',
                           leaf:true
                        },{
                           id:'resource',
                           text:Ext.bigFont('资源管理'),
                           iconCls:'icon-plugin',
                           leaf:true
                        }]
                    }),
                    listeners:{
                        'click':function(node,e){
                            var centerPanel=this.findParentByType('systempanel').findByType('centerpanel')[0];
                            if('role'==node.id){
                                if(centerPanel.hasItem('rolegrid')){

                                }else{
                                    centerPanel.add(new Thang.view.system.grid.RoleGrid({id:'roleGrid'}));
                                    centerPanel.doLayout();
                                    centerPanel.layout.setActiveItem('roleGrid');
                                    centerPanel.getItem('rolegrid').getStore().load();
                                }
                            }else if('resource'==node.id){

                            }else{}
                        }
                    }
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
	}//constructor end

});