 var files=[
               './Thang/xcomp/Util.js',
               './Thang/view/Home.js',
               './Thang/view/Office.js',
               './Thang/view/Person.js',
               './Thang/view/Info.js',
               './Thang/view/Archive.js',
               './Thang/view/System.js',
               './Thang/view/Main.js',
               './Thang/view/left/HomeLeft.js',
               './Thang/view/left/SystemLeft.js'
              ];

    Ext.Loader.load(files,function(){
      console.log('load file ok !');
    },window);


Ext.onReady(function(){

    Ext.BLANK_IMAGE_URL = 'tools/extjs/resources/images/default/s.gif';
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget="side";

    


    var homeLeft=new Thang.view.left.HomeLeft({id:'homeLeft'});

    var systemLeft=new Thang.view.left.SystemLeft({id:'systemLeft'});

    var home=new Thang.view.Home({items:[homeLeft,{region:'center',html:'I am Home center'}]});//首页模块
    var office=new Thang.view.Office({items:[{region:'center',html:'I am Office center'}]});//办公模块
    var person=new Thang.view.Person({items:[{region:'center',html:'I am Person center'}]});//人事管理模块
    var info=new Thang.view.Info({items:[{region:'center',html:'I am Info center'}]});//信息发布模块
    var archive=new Thang.view.Archive({items:[{region:'center',html:'I am Archive center'}]});//归档模块
    var system=new Thang.view.System({items:[systemLeft,{region:'center',html:'I am System center'}]});//系统模块

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