//tool class
Ext.ns("Thang.util");
var wmsg=new Thang.XMsg();
Thang.util.Utils=Ext.extend(String,{
    constructor:function(){
	    Thang.util.Utils.superclass.constructor.call(this);
	},
	bigFont:function(text,fontSize,addBlankSpace){//用于加大字体
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
	parent:function(comp,level){
		var i=1;
		if(!level){
			level=i;
		}
	    return comp.findParentBy(function(ct,cmp){
				if(i==level){
				   return true;
				}
				i=i+1;
			   return false;
	    });
	},
	WMsg:function(title,content,url){
		wmsg.show();
	},
	hostURL:"http://localhost:8080/mana"
});
