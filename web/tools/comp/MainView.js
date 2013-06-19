Ext.ns("Thang.view");


var utils=new Thang.util.Utils();

//首页面板
var home=new Thang.view.HomeView();
var system=new Thang.view.SystemView();

//主框架，头部的导航和身体。

Thang.view.MainView=Ext.extend(Ext.Panel,{
			         constructor:function(config){
						 config=config||{};
						 Ext.apply(this,config,this.config);
					     Thang.view.MainView.superclass.constructor.call(this);
					 },
					 config:{// main panel with header tab
						        xtype:'panel',
						        region:'center',
								layout:'card',
								activeItem:0,
								tbar:[{
									     id:'home',
										 scale:'large',
									     width:110,
									     height:45,
										 toggleGroup:'navigation',
									     text:utils.bigFont('首页',15,true),
									     icon:'../tools/icons/home.png',
										 handler:function(btn,evt){
											var mainView=utils.parent(this,2);
											mainView.layout.setActiveItem(home);
										}
									   },'-',
									  {
										 text:utils.bigFont('办公管理',15,false),
										 icon:'../tools/icons/work.png',
										 width:110,
										 height:45,
										 scale:'large',
										 id:'office',
										 toggleGroup:'navigation',
										 menu:{items:[{
													     id:'incept',
											             text:utils.bigFont('收文管理',14,false),
														 iconCls:'icon-folder_table'
													    },{
														 id:'insend',
														 text:utils.bigFont('发文管理',14,false),
														 iconCls:'icon-folder_up'
													   }]
										},//menu end
										handler:function(btn,evt){
											//Ext.getCmp('mainView').layout.setActiveItem(1);
										}
										 
									   },'-',
									{
										 id:'person',
										 text:utils.bigFont('人事管理',15,false),
										 icon:'../tools/icons/person.png',
										 width:110,
										 height:45,
										 scale:'large',
										 toggleGroup:'navigation',
										 handler:function(btn,evt){
											 //this.findParentByType('panel').layout.setActiveItem(this.id);
										 }
									   },'-',
									{
										 id:'info',
										 text:utils.bigFont('信息发布',15,false),
										 icon:'../tools/icons/info.png',
										 width:110,
										 height:45,
										 scale:'large',
										 toggleGroup:'navigation',
										 handler:function(btn,evt){
											 //this.findParentByType('panel').layout.setActiveItem(this.id);
										 }
									   },'-',
									{
										 id:'archive',
										 text:utils.bigFont('档案管理',15,false),
										 icon:'../tools/icons/archive.png',
										 width:110,
										 height:45,
										 scale:'large',
										 toggleGroup:'navigation',
										 handler:function(btn,evt){
											 //this.findParentByType('panel').layout.setActiveItem(this.id);
										 }
									   },'-',
									 {
										 id:'system',
										 text:utils.bigFont('系统设置',15,false),
										 icon:'../tools/icons/tools.png',
										 width:110,
										 height:45,
										 scale:'large',
										 toggleGroup:'navigation',
										 handler:function(btn,evt){
											 var mainView=utils.parent(this,2);
											 mainView.layout.setActiveItem(system);
											 system.action();
											 console.log('system model change');
										 }
									   },'->',
									{
										 text:utils.bigFont('退出',15,true),
										 icon:'../tools/icons/logout.png',
										 width:110,
										 height:45,
										 scale:'large',
										 handler:function(btn,evt){
											 window.location.href="logout";
										 }
									}],//tbar end
							  items:[home,{html:'asddf'},system]
						      
						}//config end
						
				});	//MainView panel end	


Ext.reg("mainView",Thang.view.MainView);
