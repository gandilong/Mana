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
	init:function(){
        //初始化一些模块
         Ext.ns('Thang.view','Thang.view.system.form','Thang.view.system.grid');
        //注册模块的xtype
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

             "../tools/Thang/view/system/form/UserForm.js",
             "../tools/Thang/view/system/form/DeptForm.js",
		];
		Ext.Loader.load(files,function(){
			console.log('model load ok !');

            Ext.reg('deptgrid',Thang.view.system.grid.DeptGrid);
			Ext.reg('usergrid',Thang.view.system.grid.UserGrid);

			Ext.reg('deptform',Thang.view.system.form.DeptForm);
			Ext.reg('userform',Thang.view.system.form.UserForm);
		},window);
	}

});