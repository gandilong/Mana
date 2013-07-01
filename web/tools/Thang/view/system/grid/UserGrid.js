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
             dataIndex:'dept'
          },{
        		header:'备注',
        		dataIndex:'opt'
        	}],
            tbar:[{
                    text:Ext.bigFont('新增',true),
                    iconCls:'icon-add',
                    handler:function(btn,evnt){
                        var userForm=new Thang.view.system.form.UserForm({id:'userForm'});
                        userForm.setValues({dept:config.params.dept_id});
                        userForm.show();
                    }
                  },'-',{
                    text:Ext.bigFont('删除',true),
                    iconCls:'icon-delete',
                    handler:function(btn,evnt){
                       Ext.Msg.confirm('警告','您确定要删除吗？',function(txt){
                            if('yes'==txt){
                                  var record=btn.findParentByType('grid').getSelectionModel().getSelected();
                                  Ext.Ajax.request({
                                     url:'sys/user/delete',
                                     success:function(){
                                         Ext.Msg.alert('操作提示','删除成功！',function(){
                                            store.reload();
                                         });
                                     }, 
                                     failure:function(){
                                         Ext.Msg.alert('操作提示','删除失败！');
                                     },
                                     params: {user_id:record.get('id')}
                                  });//ajax end
                            }
                       });
                       
                    }
                  },'-',{
                     text:Ext.bigFont('修改',true),
                     iconCls:'icon-calculator_edit',
                     handler:function(btn,evnt){
                        var userForm=new Thang.view.system.form.UserForm({id:'userForm'});
                        var record=btn.findParentByType('grid').getSelectionModel().getSelected();
                        userForm.loadRecord(record);
                        userForm.show();
                        userForm.on('destroy',function(comp){
                            store.reload();
                        });
                     }
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
                  self.getStore().load();
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
    }
});