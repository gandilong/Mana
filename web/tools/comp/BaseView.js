Ext.ns("Thang.view");

Thang.view.BaseView=Ext.extend(Ext.Panel,{
			   constructor:function(config){
				   config=config||{};	   			
				   Ext.apply(this,config);
				   Thang.view.BaseView.superclass.constructor.call(this);
				},
				configration:function(){//common init method
					if(!this.items){
				       this.items=new Array(2);
				    }
				    if(!this.items[0]){
				       this.items[0]=this.leftView;
				    }
				    if(!this.items[1]){
				       this.items[1]=this.centerView;
				    }
				},
				activeModel:function(){
					this.items[0].setActiveItem(this);
				}
});//base view end