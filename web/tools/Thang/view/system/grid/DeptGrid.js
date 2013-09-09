Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.DeptGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	config=config||{};
      var store=new Ext.data.JsonStore({
                                           autoDestroy:true,
                                           autoLoad:true,
                                           url:'sys/dept/list',
                                           root:'data',
                                           idProperty:'id',
                                           fields:['id','num','name','manager','opt']
                                 })//store end
    	Ext.apply(this,config,{store:store});
        Thang.view.system.grid.DeptGrid.superclass.constructor.call(this,{
            height:Ext.getBody().getHeight()-135,
        	selModel:new Ext.grid.RowSelectionModel({header:'id'}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
        		dataIndex:'id'
        	},{
            header:Ext.bigFont('部门编号'),
            dataIndex:'num',
            sortable:true,
            width:150
          },{
        		header:Ext.bigFont('部门名称'),
        		dataIndex:'name',
            sortable:true,
            width:210
        	},{
        		header:Ext.bigFont('部门领导'),
        		dataIndex:'manager',
            sortable:true,
            width:180
        	},{
        		header:Ext.bigFont('备注'),
        		dataIndex:'opt',
            width:450
        	}],
          bbar: new Ext.PagingToolbar({
                store: this.store,
                pageSize: 50
          }),
          tbar:[{
                    text:Ext.bigFont('新增',true),
                    iconCls:'icon-add',
                    handler:function(btn,evnt){
                        var deptForm=new Thang.view.system.form.DeptForm({id:'deptForm'});
                        //userForm.setValues({dept:config.params.dept_id});
                        deptForm.show();
                    }
                  },'-',{
                    text:Ext.bigFont('删除',true),
                    iconCls:'icon-delete',
                    handler:function(btn,evnt){
                       Ext.Msg.confirm('警告','您确定要删除吗？',function(txt){
                            if('yes'==txt){
                                  var record=btn.findParentByType('grid').getSelectionModel().getSelected();
                                  Ext.Ajax.request({
                                     url:'sys/dept/delete',
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
                        var deptForm=new Thang.view.system.form.DeptForm({id:'deptForm'});
                        var record=btn.findParentByType('grid').getSelectionModel().getSelected();
                        deptForm.loadRecord(record);
                        deptForm.show();
                        deptForm.on('destroy',function(comp){
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
          listeners:{
              'activate':function(self){
                  self.getStore().load();
              }
          }
        });//superclass call end

    },//constructor end
    setBaseParam:function(name,mix){//显示该模块前先设置参数
        this.getStore().setBaseParam(name,mix);
    }
});