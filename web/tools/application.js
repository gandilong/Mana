Ext.onReady(function(){

    Ext.BLANK_IMAGE_URL = '../tools/extjs/resources/images/default/s.gif';
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget="side";

    Ext.init();//延迟加载自定义模块


    var homeLeft=new Thang.view.left.HomeLeft({id:'homeLeft'});

    var infoLeft=new Thang.view.left.InfoLeft({id:'infoLeft'});
    var systemLeft=new Thang.view.left.SystemLeft({id:'systemLeft'});
    var archiveLeft=new Thang.view.left.ArchiveLeft({id:'archiveLeft'});
    var personLeft=new Thang.view.left.PersonLeft({id:'personLeft'});
    var officeLeft=new Thang.view.left.OfficeLeft({id:'officeLeft'});


    var home=new Thang.view.Home({items:[homeLeft,{id:'homeCenter',xtype:'centerpanel'}]});//首页模块
    var office=new Thang.view.Office({items:[officeLeft,{id:'officeCenter',xtype:'centerpanel'}]});//办公模块
    var person=new Thang.view.Person({items:[personLeft,{id:'personCenter',xtype:'centerpanel'}]});//人事管理模块
    var info=new Thang.view.Info({items:[infoLeft,{id:'infoCenter',xtype:'centerpanel'}]});//信息发布模块
    var archive=new Thang.view.Archive({items:[archiveLeft,{id:'archiveCenter',xtype:'centerpanel'}]});//归档模块

    
    var system=new Thang.view.System({
                                      items:[
                                             systemLeft,
                                              {
                                                xtype:'centerpanel',
                                                activeItem:'deptgrid'
                                              }
                                            ]//system items end
                                      });//系统模块


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