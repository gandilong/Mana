Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.UserGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	config=config||{};

    	Ext.apply(this,config,{
             store:new Ext.data.JsonStore({
                                              autoDestroy:true,
                                              autoLoad:true,
                                              url:'sys/user/list',
                                              baseParams:config.params,
                                              root:'data',
                                              idProperty:'id',
                                              fields:[{name:'id',type:'int'},'userName','sex','loginName','birth','opt']
                                         })
        });//apply end


        Thang.view.system.grid.UserGrid.superclass.constructor.call(this,{
            loadMask:'加载数据...',
        	selModel:new Ext.grid.RowSelectionModel({header:'id'}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
        		dataIndex:'id'
        	},{
        		header:'用户名',
        		dataIndex:'userName'
        	},{
        		header:'性别',
        		dataIndex:'sex',
        		renderer:this.sexRender     			
        	},{
        		header:'登陆名',
        		dataIndex:'loginName'
        	},{
        		header:'出生日期',
        		dataIndex:'birth'
        	},{
        		header:'备注',
        		dataIndex:'opt'
        	}],
            tbar:[{
                    text:Ext.bigFont('新增',true),
                    iconCls:'icon-add',
                    handler:function(btn,evnt){
                        //var f=userForm.findByType('form')[0].getForm().reset();
                        //userForm.show();//这个里是调用上面的userForm实例
                        var userForm=new Thang.view.system.form.UserForm({id:'userForm',params:config.params});
                        userForm.show();
                    }
                  },'-',{
                    text:Ext.bigFont('删除',true),
                    iconCls:'icon-delete'
                  },'-',{
                     text:Ext.bigFont('修改',true),
                     iconCls:'icon-calculator_edit'
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
            })
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
    }
});