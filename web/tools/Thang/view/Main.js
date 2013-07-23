Ext.ns("Thang.view");

var items=new Array();

var homeMenu={
				     id:'home',
					 scale:'large',
				     width:110,
				     height:45,
					 toggleGroup:'navigation',
				     text:Ext.bigFont('首页',true,15),
				     icon:'../tools/icons/home.png',
					 handler:function(btn,evt){
						Ext.getCmp('mainView').layout.setActiveItem(0);
					}
				};//home menu end

items.push(homeMenu);

var officeMenu={
					 text:Ext.bigFont('办公管理',true,15),
					 icon:'../tools/icons/work.png',
					 width:110,
					 height:45,
					 scale:'large',
					 id:'office',
					 toggleGroup:'navigation',
					 menu:{items:[{
								     id:'incept',
						             text:Ext.bigFont('收文管理',false,14),
									 iconCls:'icon-folder_table'
								    },{
									 id:'insend',
									 text:Ext.bigFont('发文管理',false,14),
									 iconCls:'icon-folder_up'
								   }]
					},//menu end
					handler:function(btn,evt){
						Ext.getCmp('mainView').layout.setActiveItem(1);
					}
					 
				};//office menu end

items.push("-");
items.push(officeMenu);


var personMenu={
					 id:'person',
					 text:Ext.bigFont('人事管理',true,15),
					 icon:'../tools/icons/person.png',
					 width:110,
					 height:45,
					 scale:'large',
					 toggleGroup:'navigation',
					 handler:function(btn,evt){
					 	Ext.getCmp('mainView').layout.setActiveItem(2);
					 }
				};//person menu end
items.push("-");
items.push(personMenu);


var infoMenu={
					 id:'info',
					 text:Ext.bigFont('信息发布',true,15),
					 icon:'../tools/icons/info.png',
					 width:110,
					 height:45,
					 scale:'large',
					 toggleGroup:'navigation',
					 handler:function(btn,evt){
					 	Ext.getCmp('mainView').layout.setActiveItem(3);
					 }
			  };//info menu end
items.push("-");
items.push(infoMenu);

var archiveMenu={
					 id:'archive',
					 text:Ext.bigFont('档案管理',true,15),
					 icon:'../tools/icons/archive.png',
					 width:110,
					 height:45,
					 scale:'large',
					 toggleGroup:'navigation',
					 handler:function(btn,evt){
					 	Ext.getCmp('mainView').layout.setActiveItem(4);
					 }
				   };//archive menu end
items.push("-");
items.push(archiveMenu);

var systemMenu={
					 id:'system',
					 text:Ext.bigFont('系统设置',true,15),
					 icon:'../tools/icons/tools.png',
					 width:110,
					 height:45,
					 scale:'large',
					 toggleGroup:'navigation',
					 handler:function(btn,evt){
					 	Ext.getCmp('mainView').layout.setActiveItem(5);
					 }
				   };//system menu end
items.push("-");
items.push(systemMenu);

items.push("->");
items.push({
					 text:Ext.bigFont('退出',true,15),
					 icon:'../tools/icons/logout.png',
					 width:110,
					 height:45,
					 scale:'large',
					 handler:function(btn,evt){
						 window.location.href="logout";
					 }
				});

//主界面
Thang.view.Main=Ext.extend(Ext.Panel,{
    
    constructor:function(config){
    	config=config||{};
    	Ext.apply(this,config,this.config);
    	Thang.view.Main.superclass.constructor.call(this);
    },
    config:{// main panel with header tab
	        xtype:'panel',
	        region:'center',
			layout:'card',
			activeItem:0,
			tbar:items
	}//config end

});