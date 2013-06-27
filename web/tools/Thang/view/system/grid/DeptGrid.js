Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.DeptGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config,{
            store:new Ext.data.JsonStore({
                                           autoDestroy:true,
                                           autoLoad:true,
                                           url:'sys/dept/list',
                                           //baseParams:config.params,
                                           root:'data',
                                           idProperty:'id',
                                           fields:['id','num','name','manager','opt']
                                 })//store end
        });
        Thang.view.system.grid.DeptGrid.superclass.constructor.call(this,{
            height:Ext.getBody().getHeight()-135,
        	selModel:new Ext.grid.RowSelectionModel({header:'id'}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
        		dataIndex:'id'
        	},{
                header:'部门编号',
                dataIndex:'num',
            },{
        		header:'部门名称',
        		dataIndex:'name'
        	},{
        		header:'部门领导',
        		dataIndex:'manager'
        	},{
        		header:'备注',
        		dataIndex:'opt'
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
        });//superclass call end

    },//constructor end
    setBaseParam:function(name,mix){//显示该模块前先设置参数
        this.getStore().setBaseParam(name,mix);
    }
});