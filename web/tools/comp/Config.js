//权限插件
Ext.ns("Thang.plugin");

Thang.plugin.Config=Ext.extend(Object,{
  
      constructor:function(){
	      config=config||{};
		  Ext.apply(this,config);
	  },
	  init:function(parent){
	      this.parent=parent;
		  parent.config=this;
	  },
	  toDestroy:Ext.emptyFn

});

Ext.preg('config',Thang.plugin.Config);