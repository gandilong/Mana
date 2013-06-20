Ext.ns('Thang.view.model');

Thang.view.model.DeptManager=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
        Thang.view.model.DeptManager.superclass.constructor.call(this,{
        	selModel:new Ext.grid.RowSelectionModel({header:'id'}),
        	columns:[new Ext.grid.RowNumberer(),{
        		header:'ID',
        		dataIndex:'id'
        	},{
                header:'部门编号',
                dataIndex:'num',
            },{
        		header:'部门名称',
        		dataIndex:'userName'
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
            })
        });//superclass call end

    }//constructor end

});