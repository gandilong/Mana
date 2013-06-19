//权限插件
Ext.ns("Thang.plugin");

Thang.plugin.PowerPlugin=Ext.extend(Object,{
  
      constructor:function(){
	      config=config||{};
		  Ext.apply(this,config);
	  },
	  init:function(parent){
	      this.parent=parent;
		  parent.on({
		      scope:this,
			  destroy:this.toDestroy,
			  beforerender:Ext.emptyFn
		  });
	  },
	  toDestroy:Ext.emptyFn


});