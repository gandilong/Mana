Ext.ns('Thang.view.system.grid');

Thang.view.system.grid.UserGrid=Ext.extend(Ext.grid.GridPanel,{

    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config);
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
        		renderer:function(data){
        			if('0'==data){
                       return '女';
                    }else if('1'==data){
                       return '男';
                    }else{
                       return '未登记';
                    }
        		}
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
            bbar: new Ext.PagingToolbar({
                store: this.store,
                pageSize: 50
            })
        });//superclass call end

    }//constructor end
});