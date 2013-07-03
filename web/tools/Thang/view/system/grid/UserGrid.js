Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.UserGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	  config=config||{};
        
        var store=new Ext.data.JsonStore({
                                              autoDestroy:true,
                                              autoLoad:false,
                                              url:'sys/user/list',
                                              baseParams:config.params,
                                              root:'data',
                                              idProperty:'id',
                                              totalProperty:'total',
                                              fields:[{name:'id',type:'int'},'userName','sex','loginName','loginPass','birth','dept','opt']
                                         });

    	  Ext.apply(this,config,{store:store});//apply end


        Thang.view.system.grid.UserGrid.superclass.constructor.call(this,{
          loadMask:'加载数据...',
        	selModel:new Ext.grid.RowSelectionModel({singleSelect:true}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
            type:'numeric',
            hidden:true,
        		dataIndex:'id'
        	},{
        		header:'用户名',
            type:'string',
        		dataIndex:'userName'
        	},{
        		header:'性别',
        		dataIndex:'sex',
        		renderer:this.sexRender     			
        	},{
        		header:'登陆名',
        		dataIndex:'loginName'
        	},{
             header:'登陆密码',
             dataIndex:'loginPass',
             hidden:true
          },{
        		header:'出生日期',
        		dataIndex:'birth'
        	},{
             header:'部门',
             hidden:true,
             dataIndex:'dept'
          },{
        		header:'备注',
        		dataIndex:'opt'
        	}],
          tbar:[{
                    text:Ext.bigFont('新增',true),
                    iconCls:'icon-add',
                    handler:this.addUser,
                    scope:this
                    /*function(btn,evnt){
                        var userForm=new Thang.view.system.form.UserForm({id:'userForm'});
                        userForm.setValues({dept:config.params.dept_id});
                        userForm.show();
                        userForm.on('destroy',function(comp){
                            store.reload();
                        });
                    }*/
                  },'-',{
                    text:Ext.bigFont('删除',true),
                    iconCls:'icon-delete',
                    handler:this.deleteUser,
                    scope:this
                  },'-',{
                     text:Ext.bigFont('修改',true),
                     iconCls:'icon-calculator_edit',
                     handler:this.updateUser,
                     scope:this
                  },{
                     text:Ext.bigFont('刷新',true),
                     iconCls:'icon-calculator_edit',
                     handler:function(){
                         store.reload();
                     }
            }],
            bbar: new Ext.PagingToolbar({
                store: this.store,
                pageSize: 50
            }),
            listeners:{
              'activate':function(self){
                  //self.getStore().load();
              },
              'rowcontextmenu':function(grid,rowIndex,evnt){
                   grid.getSelectionModel().selectRow(rowIndex);
                   grid.rowContextMenu.showAt(evnt.getXY());
                   var dept_id=parseInt(grid.getStore().baseParams.dept_id);//dept's id equals checkItem's id
                   grid.rowContextMenu.get('toDept').menu.get(dept_id).setChecked(true);
                   evnt.stopEvent();
              },
              'containerdblclick':function(grid,evnt){
                  grid.addUser();
                  evnt.stopEvent();
              },
              'containercontextmenu':function(grid,evnt){
                  evnt.stopEvent();  
              },
              'render':function(grid){
                   grid.initMenu();
              }
            }
        });//call end

    },//constructor end
    sexRender:function(data){
        if('0'==data){
           return '女';
        }else if('1'==data){
           return '男';
        }else{
           return '未登记';
        }
    },
    setBaseParam:function(name,mix){//显示该模块前先设置参数
        this.getStore().setBaseParam(name,mix);
    },
    addUser:function(){
      var userForm=new Thang.view.system.form.UserForm({id:'userForm'});
                        userForm.setValues({dept:this.getStore().baseParams.dept_id});
                        userForm.show();
                        userForm.on('destroy',function(comp){
                            this.getStore().reload();
                        },this);
    },
    updateUser:function(){
        var userForm=new Thang.view.system.form.UserForm({id:'userForm'});
                        var record=this.getSelectionModel().getSelected();
                        userForm.loadRecord(record);
                        userForm.show();
                        userForm.on('destroy',function(comp){
                            this.getStore().reload();
                        });
    },
    deleteUser:function(){
        Ext.Msg.confirm('警告','您确定要删除吗？',function(txt){
                            if('yes'==txt){
                                  var record=this.getSelectionModel().getSelected();
                                  Ext.Ajax.request({
                                     url:'sys/user/delete',
                                     success:function(){
                                         this.getStore().reload();
                                     }, 
                                     failure:function(){
                                         Ext.Msg.alert('操作提示','删除失败！');
                                     },
                                     params: {user_id:record.get('id')},
                                     scope:this
                                  });//ajax end
                            }// if end
        },this);//msg end
    },
    rowContextMenu:Ext.emptyFn,
    initMenu:function(){
       Ext.Ajax.request({
             url: 'sys/dept/tree',
             success: function(response,opts){
                  depts = Ext.decode(response.responseText);
                  var dept_menus=new Ext.menu.Menu();
                  
                  //add checkItem to dept_menus all scope is grid
                  for(i in depts){
                      if(depts[i].text){
                        dept_menus.addMenuItem({
                                                id:depts[i].id,
                                                xtype:'menucheckitem',
                                                group:'dept',
                                                text:Ext.bigFont(depts[i].text),
                                                handler:function(self,e){
                                                   if(this.getStore().baseParams.dept_id!=self.id){
                                                       Ext.Ajax.request({
                                                           url:'sys/user/save',
                                                           params:{
                                                               id:this.getSelectionModel().getSelected().get('id'),//here is user'id
                                                               dept:self.id //menuItem's id equals dept's id
                                                             },
                                                           success:function(self,e){
                                                               this.getStore().reload();
                                                            },
                                                            scope:this
                                                       });//ajax end
                                                   }else{
                                                       Ext.Msg.alert('操作提示','该用户己在所选部门！');
                                                   }
                                                   
                                                },
                                                scope:this
                                            });//add menus end
                      }// if end
                  }// for end

                  this.rowContextMenu=new Ext.menu.Menu({
                      items:[{
                               text:Ext.bigFont('新增'),
                               handler:this.addUser,
                               scope:this
                            },{
                               text:Ext.bigFont('设置权限')
                            },'-',
                            {
                               id:'toDept',
                               text:Ext.bigFont('转到部门'),menu:dept_menus
                            },'-',
                            {
                                 text:Ext.bigFont('修改'),
                                 handler:this.updateUser,
                                 scope:this
                            },{
                                 text:Ext.bigFont('删除'),
                                 handler:this.deleteUser,
                                 scope:this
                             }]
                  })//end menu

             },
             failure: Ext.emptyFn,
             scope:this
       });//request end
    }
});