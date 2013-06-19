Ext.ns("Thang.view");

var utils=new Thang.util.Utils();

Thang.view.HomeView=Ext.extend(Thang.view.BaseView,{
			    id:'HomeView',
                layout:'border',
                constructor:function(config){
					config=config||{};				
					Ext.apply(this,config);
					Thang.view.HomeView.superclass.configration.call(this);
					Thang.view.HomeView.superclass.constructor.call(this);
				},
				leftView:{
					  id:'LeftView',
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
				          title:'首&nbsp;&nbsp;页',
                          autoScroll:true,
                          border:false,
				          layout:'anchor',
                          iconCls:'icon-application_home',
				          defaultType:'button',
				          items:[{
								 id:'Home_Look',
					             text:utils.bigFont('前台预览',13,true),
					             anchor:'0 10%',
				                 handler:function(btn,evt){
									 var homeView=utils.parent(this,3);
									 utils.WMsg();
									 homeView.reload('homeview_client');
								 }
				           }]
			          },{
				           title:'办公管理',
                           border:false,
                           autoScroll:true,
                           iconCls:'icon-building_edit'
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
			   },
			   centerView:{
				             id:'mainview_center',
					         xtype:'tabpanel',
							 region:'center',
							 activeTab:0,
							 items:[{
									   id:'homeview_client',
									   xtype:'panel',
									   title:utils.bigFont('前台预览',12,false),
									   autoLoad:{url:'cli',scope:window,scripts:true}
									},{
									   id:'data',
									   title:utils.bigFont('数据统计',12,false),
									   html:'data ....'
									}]
				},
				reload:function(comp_id){
					this.findById(comp_id).getUpdater().refresh();
				}

});
