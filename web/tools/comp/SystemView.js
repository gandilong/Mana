Ext.ns("Thang.view");

var utils=new Thang.util.Utils();


var centerView=new Ext.TabPanel({xtype:'tabpanel',region:'center'});

var leftView={
        region:'west',
        width: 200,
        split:true,
        minSize:175,
        maxSize:300,
        collapsible: true,
        layout:'accordion',
        layoutConfig:{
            animate:true
        },
        items:[{
	        title:'用&nbsp;户&nbsp;管&nbsp;理',
            autoScroll:true,
            border:false,
	          layout:'anchor',
              iconCls:'icon-application_home',
	          defaultType:'button',
	          items:[{
					 id:'sys_dept',
		             xtype:'treepanel',
		             autoScroll:true,
		             animate:true,
		             containerScroll:true,
		             border: false,
		             loader:new Ext.tree.TreeLoader({
		            	 url:'sys/dept/list'
		             }),
		             root:{
		            	 text:'部门',
		            	 id:'dept',
		            	 expanded:true
		             },
		             listeners:{
		            	 'click':function(node,evnt){
		            		 centerView.add({
		            		               id:'userList',
		            		               xtype:'panel',
		            		               layout:'fit',
		            		               title:utils.bigFont('用户列表',12,false),
		            		               tbar:[{
		            		                   text:utils.bigFont('刷新',12,true),
                                               handler:function(){
                                                   utils.parent(this,4).reload('userList',utils.parent(this,2).getUpdater().defaultUrl);
                                               }
		            		               }],
		            		               autoLoad:{url:'sys/user?dept_id='+node.id,scripts:true}
		            		          });
                               centerView.activate('userList');
		            	 }
		             }
	           }]
        },{
	         title:'办公管理',
             border:false,
             autoScroll:true,
             iconCls:'icon-building_edit',
             items:[{
            	 text:'init db',
            	 xtype:'button',
            	 handler:function(){
            		 Ext.Ajax.request({
            			   url: 'sys/init/db',
            			   success: function(){
            				   Ext.Msg.alert('OK',"Init DB Success!");
            			   },
            			   failure:function(){
            				   Ext.Msg.alert('NO',"Init DB Failed!");
            			   }
            			});
            	 }
             }]
        },{
	           title:'人事管理',
	           iconCls:'icon-user'
        },{
	           title:'信息发布',
	           iconCls:'icon-book_open'
        },{
	           title:'档案管理',
	           iconCls:'icon-book_addresses_key'
        },{
	           title:'系统设置',
	           iconCls:'icon-wrench'
        }]
};//left view end


Thang.view.SystemView=Ext.extend(Thang.view.BaseView,{
			    id:'SystemView',
                layout:'border',
                constructor:function(config){
					config=config||{};				
					Ext.apply(this,config);
					Thang.view.SystemView.superclass.configration.call(this);//调用baseView的公共方法configration来配置leftview和centerview
					Thang.view.SystemView.superclass.constructor.call(this);
				},
				leftView:leftView,
				centerView:centerView,
				reload:function(comp_id,url){
					this.findById(comp_id).getUpdater().update({url:url,scope:window,scripts:true});
				},
				action:function(){
					//this.findById('user').load({url:'sys',scope:window,scripts:true});
				},
				subModelChange:function(subModelID){
					
				}

});
