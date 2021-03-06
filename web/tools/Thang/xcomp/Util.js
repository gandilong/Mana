//tool class
//Ext.ns("Thang");

Ext.applyIf(Ext,{
	hostURL:'http://localhost:8080/mana',
	bigFont:function(text,addBlankSpace,fontSize,boldSize){//用于加大字体.参数类型(string,boolean,int)
		if(!fontSize){
			fontSize=13;//默认字体大小为13px。
		}
		
		if(!Ext.isDefined(addBlankSpace)){
		    addBlankSpace=false;//默认不增加空格。
		}

       if(!Ext.isDefined(boldSize)){
		    boldSize='normal';//默认不增加空格。
		}

		var result='<span style="color:black;font-size:'+fontSize+'px;font-weight:'+boldSize+'">';
	    if(addBlankSpace){
		    var size=text.length;
			for(var i=0;i<size-1;i++){
			    result+=text[i]+"&nbsp;&nbsp;";
			}
			result+=text[size-1];
		}else{
		    result+=text;
		}
		result+="</span>";
		return result;
	},
	loadJS:function(files){
        Ext.Loader.load(files,function(){
            console.log('load file ok !');
        },window);
	},
	loadModel:function(){
        //初始化一些模块
         Ext.ns('Thang.view','Thang.view.system.form','Thang.view.system.grid');
        //注册模块的xtype
        Ext.reg('power',Thang.Power);
        Ext.reg('systempanel',Thang.view.System);
        Ext.reg('archivepanel',Thang.view.Archive);
        Ext.reg('personpanel',Thang.view.Person);
        Ext.reg('infopanel',Thang.view.Info);
        Ext.reg('officepanel',Thang.view.Office);
        Ext.reg('homepanel',Thang.view.Home);
        Ext.reg('centerpanel',Thang.view.center.Center);

        Ext.reg('systemleft',Thang.view.left.SystemLeft);
       
        //延迟加载一些模块
		var files=[
             "../tools/Thang/view/system/grid/UserGrid.js",
             "../tools/Thang/view/system/grid/DeptGrid.js",
             "../tools/Thang/view/system/grid/RoleGrid.js",
             "../tools/Thang/view/system/grid/ResourceGrid.js",

             "../tools/Thang/view/system/form/UserForm.js",
             "../tools/Thang/view/system/form/DeptForm.js",
             "../tools/Thang/view/system/form/RoleForm.js",
             "../tools/Thang/view/system/form/ResourceForm.js",

             "../tools/Thang/view/center/Database.js",

             "../tools/Thang/xcomp/XMenu.js",
		];
		Ext.Loader.load(files,function(){
			console.log('model load ok !');

            Ext.reg('deptgrid',Thang.view.system.grid.DeptGrid);
			Ext.reg('usergrid',Thang.view.system.grid.UserGrid);
			Ext.reg('rolegrid',Thang.view.system.grid.RoleGrid);
			Ext.reg('resourcegrid',Thang.view.system.grid.ResourceGrid);

			Ext.reg('deptform',Thang.view.system.form.DeptForm);
			Ext.reg('userform',Thang.view.system.form.UserForm);
			Ext.reg('roleform',Thang.view.system.form.RoleForm);
			Ext.reg('resourceform',Thang.view.system.form.ResourceForm);

			Ext.reg('database',Thang.view.center.Database);

			Ext.reg('xmenu',Thang.XMenu);
		},window);
	}

});