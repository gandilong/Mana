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

        Ext.reg('systempanel',Thang.view.System);

		var files=[
             "../tools/Thang/view/model/UserManager.js",
             "../tools/Thang/view/model/DeptManager.js",
		];
		Ext.Loader.load(files,function(){
			console.log('model load ok !');
		},window);
	}

});

/*
var wmsg=new Thang.WMsg({title:'消息提醒'});

Thang.Util=Ext.extend(String,{
    constructor:function(){
	    Thang.Util.superclass.constructor.call(this);
	},
	
	bigFont:function(text,addBlankSpace,fontSize){//用于加大字体.参数类型(string,boolean,int)
		if(!fontSize){
			fontSize=13;//默认字体大小为13px。
		}
		
		if(!Ext.isDefined(addBlankSpace)){
		    addBlankSpace=true;//默认增加两个空格。
		}
		var result='<span style="font-size:'+fontSize+'px">';
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
	
	WMsg:function(title,content,url){
		wmsg.show();
	},

	hostURL:"http://localhost:8080/mana"
});
*/
