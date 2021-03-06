Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.ResourceGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	  config=config||{};
        
        var store=new Ext.data.JsonStore({
                                              autoDestroy:true,
                                              autoLoad:false,
                                              url:'sys/resource/list',
                                              root:'data',
                                              idProperty:'id',
                                              totalProperty:'total',
                                              fields:[{name:'id',type:'int'},'name','title','opt']
                                         });

    	  Ext.apply(this,config,{store:store});//apply end


        Thang.view.system.grid.ResourceGrid.superclass.constructor.call(this,{
          loadMask:'加载数据...',
        	selModel:new Ext.grid.RowSelectionModel({singleSelect:true}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
            type:'numeric',
            hidden:true,
        		dataIndex:'id'
        	},{
             header:Ext.bigFont('资源标示'),
             type:'string',
             dataIndex:'name',
             sortable:true,
             width:210
          },{
        		header:Ext.bigFont('资源名称'),
            type:'string',
        		dataIndex:'title',
            sortable:true,
            width:180
        	},{
        		header:Ext.bigFont('备注'),
            type:'string',
        		dataIndex:'opt',
            width:450			
        	}],
          tbar:[{
                    text:Ext.bigFont('新增',true),
                    iconCls:'icon-add',
                    handler:this.addResource,
                    scope:this
                  },'-',{
                    text:Ext.bigFont('删除',true),
                    iconCls:'icon-delete',
                    handler:this.deleteResource,
                    scope:this
                  },'-',{
                     text:Ext.bigFont('修改',true),
                     iconCls:'icon-calculator_edit',
                     handler:this.updateResource,
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
                   //grid.rowContextMenu.get('toDept').menu.get(dept_id).setChecked(true);
                   evnt.stopEvent();
              },
              'containerdblclick':function(grid,evnt){
                  grid.addRole();
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
    setBaseParam:function(name,mix){//显示该模块前先设置参数
        this.getStore().setBaseParam(name,mix);
    },
    addResource:function(){
      var resourceForm=new Thang.view.system.form.ResourceForm({id:'resourceForm'});
                        resourceForm.setValues({dept:this.getStore().baseParams.dept_id});
                        resourceForm.show();
                        resourceForm.on('destroy',function(comp){
                            this.getStore().reload();
                        },this);
    },
    updateResource:function(){
        var resourceForm=new Thang.view.system.form.ResourceForm({id:'resourceForm'});
                        var record=this.getSelectionModel().getSelected();
                        if(record){
                           resourceForm.loadRecord(record);
                           resourceForm.show();
                           resourceForm.on('destroy',function(comp){
                              this.getStore().reload();
                           },this);
                        }else{
                          Ext.Msg.alert('提示','请选择一条记录！');
                        }
                        
    },
    deleteResource:function(){
        Ext.Msg.confirm('警告','您确定要删除吗？',function(txt){
                            if('yes'==txt){
                                  var record=this.getSelectionModel().getSelected();
                                  Ext.Ajax.request({
                                     url:'sys/resource/delete',
                                     success:function(){
                                         this.getStore().reload();
                                     }, 
                                     failure:function(){
                                         Ext.Msg.alert('操作提示','删除失败！');
                                     },
                                     params: {role_id:record.get('id')},
                                     scope:this
                                  });//ajax end
                            }// if end
        },this);//msg end
    },
    rowContextMenu:Ext.emptyFn,
    initMenu:function(){
       
       this.rowContextMenu=new Ext.menu.Menu({
                      items:[{
                               text:Ext.bigFont('新增'),
                               handler:this.addResource,
                               scope:this
                            },'-',            
                            {
                                 text:Ext.bigFont('修改'),
                                 handler:this.updateResource,
                                 scope:this
                            },{
                                 text:Ext.bigFont('删除'),
                                 handler:this.deleteResource,
                                 scope:this
                             }]
                  });//end menu
    }
});