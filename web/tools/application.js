Ext.onReady(function(){

    Ext.BLANK_IMAGE_URL = 'tools/extjs/resources/images/default/s.gif';
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget="side";

    var home=new Thang.view.Home({html:'good ! just test'});//首页模块
    var office=new Thang.view.Office();//办公模块
    var person=new Thang.view.Person();//人事管理模块
    var info=new Thang.view.Info();//信息发布模块
    var archive=new Thang.view.Archive();//归档模块
    var system=new Thang.view.System();//系统模块

    var main=new Thang.view.Main({id:'mainView',items:[home,office,person,info,archive,system]}); 

	  new Ext.Viewport({
	    		        layout:'border',
					        items:[{
					                height: 48,
                          region:'north',
                          xtype:'box',
                          el:'header',
                          border:false,
                          margins: '0 0 5 0'
							    },main]
		});
    console.log('run ok');
},window);