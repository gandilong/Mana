//  工具组件
Ext.ns("Thang");

Thang.DeptMenu=Ext.extend(Ext.menu.Menu,{
	                     
		constructor:function(config){
					 config=config||{};
				     Ext.apply(this,config);
				     Thang.DeptMenu.superclass.constructor.call(this);
                      
                     this.initMenu(config);
                     
                     

		},
		initMenu:function(config){
			if(!config.menuData){
                this.loadData(config);
			}else{
			    this.addData(config);    
            }
		},
		addData:function(config){
			if(!Ext.isDefined(config.handler)){
                 config.handler=Ext.emptyFn;
			 }
			with(config){
			 
             for(i in menuData){
                      if(menuData[i].text){
                          this.addMenuItem({
                          	                id:menuData[i].id+id,
                                            xtype:'menucheckitem',
                                            group:config.group,
                                            text:Ext.bigFont(menuData[i].text),
                                            handler:handler

                            });
                       }//if end
             }//for end
           }//with end
		},
		loadData:function(config){
            Ext.Ajax.request({
            	url:config.url,
            	success:function(response,opt){
            		config.menuData=Ext.decode(response.responseText);
                    this.addData(config);
            	},
            	scope:this
            });
		}
						 
});//WMsg end